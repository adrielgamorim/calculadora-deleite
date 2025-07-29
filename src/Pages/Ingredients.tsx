import { useEffect, useState } from "react";
import type { Ingredient } from "@models/Ingredient";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import { endpoints } from "@data/endpoints";
import { Button } from "@components/Button";
import type { Bundle } from "@models/Bundle";

export function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIngredients(await getDocuments<Ingredient>(endpoints.ingredients));
    };
    fetchData();
  }, []);

  async function handleAddIngredient(ingredient: Ingredient): Promise<void> {
    if(!ingredient.name || !ingredient.price || !ingredient.quantity || !ingredient.unit) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }
    await addDocument<Ingredient>(endpoints.ingredients, ingredient);
    (document.getElementById("ingredient-form") as HTMLFormElement)?.reset();
    setIngredients(await getDocuments<Ingredient>(endpoints.ingredients));
  }

  function getIngredientValuesToAdd(): Ingredient {
    return {
      name: (document.getElementById("ingredient-name") as HTMLInputElement)?.value || "",
      price: Number((document.getElementById("ingredient-price") as HTMLInputElement)?.value) || 0,
      quantity: Number((document.getElementById("ingredient-quantity") as HTMLInputElement)?.value) || 0,
      unit: (document.getElementById("ingredient-unit") as HTMLInputElement)?.value || "",
      used_in_frame_15: Number((document.getElementById("ingredient-frame15") as HTMLInputElement)?.value) || 0,
      used_in_frame_25: Number((document.getElementById("ingredient-frame25") as HTMLInputElement)?.value) || 0,
      used_in_frame_35: Number((document.getElementById("ingredient-frame35") as HTMLInputElement)?.value) || 0,
    };
  }

  async function handleDelIngredient(id: string): Promise<void> {
    if(await checkIngredientIsUsedInBundles(id)) {
      alert("Este ingrediente está sendo usado em um conjunto e não pode ser removido.");
      return;
    }
    if (window.confirm("Tem certeza que deseja remover este ingrediente?")) {
      await deleteDocument(endpoints.ingredients, id);
      setIngredients(await getDocuments<Ingredient>(endpoints.ingredients));
    }
  }

  async function checkIngredientIsUsedInBundles(ingredientId: string): Promise<boolean> {
    const bundles = await getDocuments<Bundle>(endpoints.bundles);
    return bundles.some(bundle => bundle.ingredients.some(ingredient => ingredient.id === ingredientId));
  }

  return (
    <div>
      <h1>Lista de Ingredientes</h1>
      <p>Aqui você pode ver e adicionar novos ingredientes.</p>

      <form id="ingredient-form">
        <input id="ingredient-name" type="text" placeholder="Nome do Ingrediente*" />
        <input id="ingredient-price" type="number" placeholder="Preço*" />
        <input id="ingredient-quantity" type="number" placeholder="Quantidade*" />
        <select id="ingredient-unit" defaultValue="">
          <option value="" disabled>Unidade*</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="un">un</option>
        </select>
        <input id="ingredient-frame15" type="number" placeholder="Qnt usada no aro 15" />
        <input id="ingredient-frame25" type="number" placeholder="Qnt usada no aro 25" />
        <input id="ingredient-frame35" type="number" placeholder="Qnt usada no aro 35" />
        <Button label="Adicionar Ingrediente" onClick={() => handleAddIngredient(getIngredientValuesToAdd())} />
      </form>

      {ingredients.length === 0 ? <p>Nenhum ingrediente encontrado.</p> : (
        <ul>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Unidade</th>
                <th>Qnt usada no aro 15</th>
                <th>Qnt usada no aro 25</th>
                <th>Qnt usada no aro 35</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map(ingredient => (
                <tr key={ingredient.id}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.price}</td>
                  <td>{ingredient.quantity}</td>
                  <td>{ingredient.unit}</td>
                  <td>{ingredient.used_in_frame_15}</td>
                  <td>{ingredient.used_in_frame_25}</td>
                  <td>{ingredient.used_in_frame_35}</td>
                  <td><Button label={"❌"} onClick={() => handleDelIngredient(ingredient.id!)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      )}
    </div>
  );
}