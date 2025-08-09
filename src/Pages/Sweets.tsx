import { useEffect, useState } from "react";
import Select from 'react-select'
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import type { MultiValue } from 'react-select';
import type { Sweet } from "@models/Sweet";
import { Frames } from "@data/Frames";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import { endpoints } from "@data/endpoints";
import { Button } from "@components/Button";

export function Sweets() {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [selectedBundles, setSelectedBundles] = useState<Bundle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setSweets(await getDocuments<Sweet>(endpoints.sweets));
      setIngredients(await getDocuments<Ingredient>(endpoints.ingredients));
      setBundles(await getDocuments<Bundle>(endpoints.bundles));
    };
    fetchData();
  }, []);

  async function handleAddSweet(sweet: Sweet): Promise<void> {
    if (!sweet.name) {
      alert("Por favor, preencha o campo Nome.");
      return;
    }
    if (!sweet.frame) {
      alert("Por favor, selecione o tamanho do Bolo.");
      return;
    }
    if (selectedIngredients.length <= 1 && selectedBundles.length <= 1) {
      alert("Por favor, selecione pelo menos dois itens.");
      return;
    }
    await addDocument<Sweet>(endpoints.sweets, sweet);
    setSweets(await getDocuments<Sweet>(endpoints.sweets));
    window.location.reload();
  }

  function getSweetToAdd(): Sweet {
    return {
      name: (document.getElementById("sweet-name") as HTMLInputElement)?.value || "",
      ingredients: selectedIngredients,
      bundles: selectedBundles,
      frame: (document.getElementById("sweet-frame") as HTMLSelectElement)?.value as Frames
    };
  }

  async function handleDelSweet(id: string): Promise<void> {
    if (window.confirm("Tem certeza que deseja remover este bolo?")) {
      await deleteDocument(endpoints.sweets, id);
      setSweets(await getDocuments<Sweet>(endpoints.sweets));
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

      <form id="sweet-form">
        <input id="sweet-name" type="text" placeholder="Nome do Bolo*" />
        <select id="sweet-frame" defaultValue="">
          <option value="" disabled>Selecione o tamanho do Bolo*</option>
          <option value={Frames.frame15}>Bolo 15cm</option>
          <option value={Frames.frame25}>Bolo 25cm</option>
          <option value={Frames.frame35}>Bolo 35cm</option>
        </select>
        <Select options={getIngredientOptionsForSelect()} onChange={handleIngredientOptionsChange} isMulti id="sweet-ingredients" placeholder="Selecione os Ingredientes*" />
        <Select options={getBundleOptionsForSelect()} onChange={handleBundleOptionsChange} isMulti id="sweet-bundles" placeholder="Selecione os Conjuntos*" />
        <Button label="Adicionar Bolo" onClick={() => handleAddSweet(getSweetToAdd())} />
      </form>

      {sweets.length === 0 ? <p>Nenhum Bolo encontrado.</p> : (
        <ul>
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
              {sweets.map(sweet => (
                <tr key={sweet.id}>
                  <td>{sweet.name}</td>
                  <td>
                    {sweet.bundles!.map(bundle => (
                      <span key={bundle.id}>
                        {bundle.name}
                        {sweet.bundles!.indexOf(bundle) < sweet.bundles!.length - 1 && ', '}
                      </span>
                    ))}
                  </td>
                  <td>
                    {sweet.ingredients!.map(ingredient => (
                      <span key={ingredient.id}>
                        {ingredient.name}
                        {sweet.ingredients!.indexOf(ingredient) < sweet.ingredients!.length - 1 && ', '}
                      </span>
                    ))}
                  </td>
                  <td><Button label={"❌"} onClick={() => handleDelSweet(sweet.id!)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      )}
    </div>
  );
}
