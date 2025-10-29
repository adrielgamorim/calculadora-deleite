import "@styles/Table.css";
import type { Bundle } from "@models/Bundle";
import type { MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { helpers } from "@helpers/helpers";
import { useEffect, useState } from "react";
import { Endpoints } from "@data/Endpoints";
import { Button } from "@components/Button";
import { useItemForm } from "@hooks/useItemForm";
import { RiDeleteBin2Line, RiMenuUnfold3Line } from "react-icons/ri";
import { BundleForm } from "@components/BundleForm";
import { useColumnSort } from "@hooks/useColumnSort";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import { SearchBar } from "@components/SearchBar";
import { useSearch } from "@hooks/useSearch";

export function Bundles() {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const { showAddItemMenu, setShowAddItemMenu } = useItemForm(false);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>([]);
  const { searchTerm, setSearchTerm, filteredData } = useSearch(bundles, ['name']);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Bundle>(filteredData);

  useEffect(() => {
    Promise.all([
      getDocuments<Bundle>(Endpoints.bundles),
      getDocuments<Ingredient>(Endpoints.ingredients)
    ]).then(([bundlesData, ingredientsData]) => {
      setBundles(bundlesData);
      setIngredients(ingredientsData);
    });
  }, []);

  useEffect(() => {
    (async () => {
      setBundles(await helpers.pullBundlesWithIngredients(bundles));
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients]);

  async function handleAddBundle(bundle: Bundle): Promise<void> {
    if (!bundle.name) {
      alert("Por favor, preencha o Nome.");
      return;
    }
    if (selectedIngredientIds.length <= 1) {
      alert("Por favor, selecione pelo menos dois ingredientes.");
      return;
    }
    await addDocument<Bundle>(Endpoints.bundles, bundle);
    const freshBundles = await getDocuments<Bundle>(Endpoints.bundles);
    setBundles(await helpers.pullBundlesWithIngredients(freshBundles));
    resetForm();
  }

  function resetForm(): void {
    setSelectedIngredientIds([]);
    (document.getElementById("form") as HTMLFormElement)?.reset();
    setShowAddItemMenu(false);
  }

  function getBundleToAdd(): Bundle {
    return {
      name: (document.getElementById("bundle-name") as HTMLInputElement)?.value || "",
      ingredients: selectedIngredientIds,
    };
  }

  async function handleDelBundle(id: string): Promise<void> {
    if (await helpers.checkBundleIsUsedInCakes(id)) {
      alert("Este conjunto está sendo usado em um bolo e não pode ser removido.");
      return;
    }
    if (window.confirm("Tem certeza que deseja remover este conjunto?")) {
      await deleteDocument(Endpoints.bundles, id);
      const bundles = await getDocuments<Bundle>(Endpoints.bundles);
      setBundles(await helpers.pullBundlesWithIngredients(bundles));
    }
  }

  function getIngredientOptionsForSelect(): { value: string; label: string }[] {
    return ingredients
      .map(ingredient => ({ value: ingredient.id!, label: ingredient.name }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  function handleOptionsChange(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const ids = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedIngredientIds(ids);
  }

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) setShowAddItemMenu(false); }}>
      <h1>Conjuntos</h1>

      <Button label={showAddItemMenu ? "Fechar menu" : "Adicionar Conjunto"} icon={!showAddItemMenu && <RiMenuUnfold3Line size={20} />} onClick={() => setShowAddItemMenu(prev => !prev)} />
      {<BundleForm
        handleSubmit={() => handleAddBundle(getBundleToAdd())}
        handleCloseMenu={resetForm}
        handleOptionsChange={handleOptionsChange}
        getIngredientOptionsForSelect={getIngredientOptionsForSelect}
        selectedIngredientIds={selectedIngredientIds}
      />}

      <SearchBar 
        value={searchTerm} 
        onChange={setSearchTerm}
        placeholder="Buscar por nome..."
      />

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
                  {bundle.hydratedIngredients?.map((ingredient, index) => (
                    <span key={ingredient.id}>
                      {ingredient.name.trim()}
                      {index < bundle.hydratedIngredients!.length - 1 && Common.tableItemSeparator}
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
