import "@styles/Table.css";
import type { Bundle } from "@models/Bundle";
import type { MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { useEffect, useState } from "react";
import { Endpoints } from "@data/Endpoints";
import { Button } from "@components/Button";
import { useItemForm } from "@helpers/useItemForm";
import { RiDeleteBin2Line, RiMenuUnfold3Line } from "react-icons/ri";
import { BundleForm } from "@components/BundleForm";
import { useColumnSort } from "@helpers/useColumnSort";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";

export function Bundles() {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const { showAddItemMenu, setShowAddItemMenu } = useItemForm(false);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Bundle>(bundles);

  useEffect(() => {
    Promise.all([
      getDocuments<Bundle>(Endpoints.bundles),
      getDocuments<Ingredient>(Endpoints.ingredients)
    ]).then(([bundlesData, ingredientsData]) => {
      setBundles(bundlesData);
      setIngredients(ingredientsData);
    });
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
    <div onClick={(e) => { if (e.target === e.currentTarget) setShowAddItemMenu(false); }}>
      <h1>Conjuntos</h1>

      <Button label={showAddItemMenu ? "Fechar menu" : "Adicionar Conjunto"} icon={!showAddItemMenu && <RiMenuUnfold3Line size={20} />} onClick={() => setShowAddItemMenu(prev => !prev)} />
      {<BundleForm
        handleSubmit={() => handleAddBundle(getBundleToAdd())}
        handleCloseMenu={() => setShowAddItemMenu(false)}
        handleOptionsChange={handleOptionsChange}
        getIngredientOptionsForSelect={getIngredientOptionsForSelect}
      />}

      {bundles.length === 0 ? <p>Nenhum Conjunto encontrado.</p> : (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Nome {sortColumn === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="static">Ingredientes</th>
              <th className="static">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(bundle => (
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
                <td><Button label={<RiDeleteBin2Line color="red" />} onClick={() => handleDelBundle(bundle.id!)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
