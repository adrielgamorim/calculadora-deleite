import { useEffect, useState } from "react";
import Select from 'react-select'
import type { MultiValue } from 'react-select';
import type { Bundle } from "@models/Bundle";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import { endpoints } from "@data/endpoints";
import { Button } from "@components/Button";
import type { Ingredient } from "@models/Ingredient";

export function Bundles() {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setBundles(await getDocuments<Bundle>(endpoints.bundles));
      setIngredients(await getDocuments<Ingredient>(endpoints.ingredients));
    };
    fetchData();
  }, []);

  async function handleAddBundle(bundle: Bundle): Promise<void> {
    if (!bundle.name) {
      alert("Por favor, preencha o campo Nome.");
      return;
    }
    if (selectedIngredients.length <= 1) {
      alert("Por favor, selecione pelo menos dois ingredientes.");
      return;
    }
    await addDocument<Bundle>(endpoints.bundles, bundle);
    setBundles(await getDocuments<Bundle>(endpoints.bundles));
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
      await deleteDocument(endpoints.bundles, id);
      setBundles(await getDocuments<Bundle>(endpoints.bundles));
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

      <form id="bundle-form">
        <input id="bundle-name" type="text" placeholder="Nome do Conjunto*" />
        <Select options={getIngredientOptionsForSelect()} onChange={handleOptionsChange} isMulti id="bundle-ingredients" placeholder="Selecione os Ingredientes*" />
        <Button label="Adicionar Bundle" onClick={() => handleAddBundle(getBundleToAdd())} />
      </form>

      {bundles.length === 0 ? <p>Nenhum Conjunto encontrado.</p> : (
        <ul>
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
                        {bundle.ingredients.indexOf(ingredient) < bundle.ingredients.length - 1 && ', '}
                      </span>
                    ))}
                  </td>
                  <td><Button label={"❌"} onClick={() => handleDelBundle(bundle.id!)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      )}
    </div>
  );
}