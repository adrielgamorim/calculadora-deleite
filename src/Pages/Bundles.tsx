import { useEffect, useState } from "react";  
import type { MultiValue } from 'react-select';
import type { Bundle } from "@models/Bundle";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import { Endpoints } from "@data/Endpoints";
import { Button } from "@components/Button";
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { BundleForm } from "@components/BundleForm";

export function Bundles() {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setBundles(await getDocuments<Bundle>(Endpoints.bundles));
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
    };
    fetchData();
  }, []);

  async function handleAddBundle(bundle: Bundle): Promise<void> {
    if (!bundle.name) {
      alert("Por favor, preencha o Nome.");
      return;
    }
    if (selectedIngredients.length <= 1) {
      alert("Por favor, selecione pelo menos dois ingredientes.");
      return;
    }
    await addDocument<Bundle>(Endpoints.bundles, bundle);
    setBundles(await getDocuments<Bundle>(Endpoints.bundles));
    window.location.reload();
  }

  function getBundleToAdd(): Bundle {
    return {
      name: (document.getElementById("bundle-name") as HTMLInputElement)?.value || "",
      ingredients: selectedIngredients,
    };
  }

  async function handleDelBundle(id: string): Promise<void> {
    if (window.confirm("Tem certeza que deseja remover este conjunto?")) {
      await deleteDocument(Endpoints.bundles, id);
      setBundles(await getDocuments<Bundle>(Endpoints.bundles));
    }
  }

  function getIngredientOptionsForSelect(): { value: string; label: string }[] {
    return ingredients.map(ingredient => ({ value: ingredient.id!, label: ingredient.name }));
  }

  function handleOptionsChange(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const labels = selectedOptions ? selectedOptions.map(option => option.label) : [];
    setSelectedIngredients(ingredients.filter(ingredient => labels.includes(ingredient.name)));
  }

  return (
    <div>
      <h1>Lista de Conjuntos</h1>
      <p>Aqui você pode ver e adicionar novos conjuntos.</p>

        {<BundleForm handleOnClick={() => handleAddBundle(getBundleToAdd())} handleCloseMenu={() => {/*setShowAddIngredientMenu(false)*/}} handleOptionsChange={handleOptionsChange} getIngredientOptionsForSelect={getIngredientOptionsForSelect} />}

      {bundles.length === 0 ? <p>Nenhum Conjunto encontrado.</p> : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ingredientes</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {bundles.map(bundle => (
              <tr key={bundle.id}>
                <td>{bundle.name}</td>
                <td>
                  {bundle.ingredients.map(ingredient => (
                    <span key={ingredient.id}>
                      {ingredient.name}
                      {bundle.ingredients.indexOf(ingredient) < bundle.ingredients.length - 1 && Common.tableItemSeparator}
                    </span>
                  ))}
                </td>
                <td><Button label={Common.deleteButtonLabel} onClick={() => handleDelBundle(bundle.id!)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}