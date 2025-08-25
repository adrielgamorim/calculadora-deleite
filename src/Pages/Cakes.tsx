import { useEffect, useState } from "react";
import Select from 'react-select'
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import type { MultiValue } from 'react-select';
import type { Cake } from "@models/Cake";
import { Frames } from "@data/Frames";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import { Endpoints } from "@data/Endpoints";
import { Button } from "@components/Button";
import { Common } from "@data/Common";

export function Cakes() {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [selectedBundles, setSelectedBundles] = useState<Bundle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setCakes(await getDocuments<Cake>(Endpoints.cakes));
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
      setBundles(await getDocuments<Bundle>(Endpoints.bundles));
    };
    fetchData();
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
    <div>
      <h1>Lista de Bolos</h1>
      <p>Aqui você pode ver e adicionar novos bolos.</p>

      <form id="cake-form">
        <input id="cake-name" type="text" placeholder="Nome do Bolo*" />
        <select id="cake-frame" defaultValue="">
          <option value="" disabled>Selecione o tamanho do Bolo*</option>
          <option value={Frames.frame15}>Bolo 15cm</option>
          <option value={Frames.frame25}>Bolo 25cm</option>
          <option value={Frames.frame35}>Bolo 35cm</option>
        </select>
        <Select options={getIngredientOptionsForSelect()} onChange={handleIngredientOptionsChange} isMulti id="cake-ingredients" placeholder="Selecione os Ingredientes*" />
        <Select options={getBundleOptionsForSelect()} onChange={handleBundleOptionsChange} isMulti id="cake-bundles" placeholder="Selecione os Conjuntos*" />
        <Button label="Adicionar Bolo" onClick={() => handleAddCake(getCakeToAdd())} />
      </form>

      {cakes.length === 0 ? <p>Nenhum Bolo encontrado.</p> : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Conjuntos</th>
              <th>Ingredientes</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cakes.map(cake => (
              <tr key={cake.id}>
                <td>{cake.name}</td>
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
                <td><Button label={Common.deleteButtonLabel} onClick={() => handleDelCake(cake.id!)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
