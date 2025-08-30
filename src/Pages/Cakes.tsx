import type { Cake } from "@models/Cake";
import type { Bundle } from "@models/Bundle";
import type { MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { Frames } from "@data/Frames";
import { Button } from "@components/Button";
import { Endpoints } from "@data/Endpoints";
import { useEffect, useState } from "react";
import { CakeForm } from "@components/CakeForm";
import { useItemForm } from "@helpers/useItemForm";
import { RiDeleteBin2Line, RiMenuUnfold3Line } from "react-icons/ri";
import { useColumnSort } from "@helpers/useColumnSort";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";

export function Cakes() {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedBundles, setSelectedBundles] = useState<Bundle[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const { showAddItemMenu, setShowAddItemMenu } = useItemForm(false);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Cake>(cakes);

  useEffect(() => {
    Promise.all([
      getDocuments<Cake>(Endpoints.cakes),
      getDocuments<Ingredient>(Endpoints.ingredients),
      getDocuments<Bundle>(Endpoints.bundles)
    ]).then(([cakesData, ingredientsData, bundlesData]) => {
      setCakes(cakesData);
      setIngredients(ingredientsData);
      setBundles(bundlesData);
    });
  }, []);

  async function handleAddCake(cake: Cake): Promise<void> {
    if (!cake.name) {
      alert("Por favor, preencha o campo Nome.");
      return;
    }
    if (!cake.frame) {
      alert("Por favor, selecione o tamanho do Bolo.");
      return;
    }
    if (selectedIngredients.length + selectedBundles.length <= 1) {
      alert("Por favor, selecione pelo menos dois itens.");
      return;
    }
    await addDocument<Cake>(Endpoints.cakes, cake);
    setCakes(await getDocuments<Cake>(Endpoints.cakes));
    window.location.reload();
  }

  function getCakeToAdd(): Cake {
    return {
      name: (document.getElementById("cake-name") as HTMLInputElement)?.value || "",
      ingredients: selectedIngredients,
      bundles: selectedBundles,
      frame: (document.getElementById("cake-frame") as HTMLSelectElement)?.value as Frames
    };
  }

  async function handleDelCake(id: string): Promise<void> {
    if (window.confirm("Tem certeza que deseja remover este bolo?")) {
      await deleteDocument(Endpoints.cakes, id);
      setCakes(await getDocuments<Cake>(Endpoints.cakes));
    }
  }

  function getFrameName(frame: Frames): string {
    switch (frame) {
      case Frames.frame15:
        return "15cm";
      case Frames.frame25:
        return "25cm";
      case Frames.frame35:
        return "35cm";
      default:
        return "Desconhecido";
    }
  }

  function getIngredientOptionsForSelect(): { value: string; label: string }[] {
    return ingredients.map(ingredient => ({ value: ingredient.id!, label: ingredient.name }));
  }

  function handleIngredientOptionsChange(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const labels = selectedOptions ? selectedOptions.map(option => option.label) : [];
    setSelectedIngredients(ingredients.filter(ingredient => labels.includes(ingredient.name)));
  }

  function getBundleOptionsForSelect(): { value: string; label: string }[] {
    return bundles.map(bundle => ({ value: bundle.id!, label: bundle.name }));
  }

  function handleBundleOptionsChange(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const labels = selectedOptions ? selectedOptions.map(option => option.label) : [];
    setSelectedBundles(bundles.filter(bundle => labels.includes(bundle.name)));
  }

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) setShowAddItemMenu(false); }}>
      <h1>Bolos</h1>

      <Button label={showAddItemMenu ? "Fechar menu" : "Adicionar Bolo"} icon={!showAddItemMenu && <RiMenuUnfold3Line size={20} />} onClick={() => setShowAddItemMenu(prev => !prev)} />
      {<CakeForm
        handleSubmit={() => handleAddCake(getCakeToAdd())}
        handleCloseMenu={() => setShowAddItemMenu(false)}
        handleIngredientOptionsChange={handleIngredientOptionsChange}
        getIngredientOptionsForSelect={getIngredientOptionsForSelect}
        getBundleOptionsForSelect={getBundleOptionsForSelect}
        handleBundleOptionsChange={handleBundleOptionsChange}
      />}

      {cakes.length === 0 ? <p>Nenhum Bolo encontrado.</p> : (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Nome {sortColumn === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("frame")}>
                Tamanho {sortColumn === "frame" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="static">Conjuntos</th>
              <th className="static">Ingredientes</th>
              <th className="static">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(cake => (
              <tr key={cake.id}>
                <td>{cake.name}</td>
                <td>{getFrameName(cake.frame)}</td>
                <td>
                  {cake.bundles!.length > 0 ? cake.bundles!.map(bundle => (
                    <span key={bundle.id}>
                      {bundle.name}
                      {cake.bundles!.indexOf(bundle) < cake.bundles!.length - 1 && Common.tableItemSeparator}
                    </span>
                  )) : (
                    Common.noTableItemFoundContent
                  )}
                </td>
                <td>
                  {cake.ingredients!.length > 0 ? cake.ingredients!.map(ingredient => (
                    <span key={ingredient.id}>
                      {ingredient.name}
                      {cake.ingredients!.indexOf(ingredient) < cake.ingredients!.length - 1 && Common.tableItemSeparator}
                    </span>
                  )) : (
                    Common.noTableItemFoundContent
                  )}
                </td>
                <td><Button label={<RiDeleteBin2Line color="red" />} onClick={() => handleDelCake(cake.id!)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
