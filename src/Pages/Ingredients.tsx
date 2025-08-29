import type { Cake } from "@models/Cake";
import type { Bundle } from "@models/Bundle";
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { helpers } from "@helpers/helpers";
import { Button } from "@components/Button";
import { Endpoints } from "@data/Endpoints";
import { useEffect, useState } from "react";
import { IngredientForm } from "@components/IngredientForm";
import { getDocuments, addDocument, deleteDocument } from "@requests/requests";
import '@styles/IngredientForm.css';

export function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [showAddIngredientMenu, setShowAddIngredientMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const formElement = document.getElementById("ingredient-form");
    if (formElement) {
      formElement.style.top = showAddIngredientMenu ? "20vh" : "-100vh";
    }
  }, [showAddIngredientMenu]);

  async function handleAddIngredient(ingredient: Ingredient): Promise<void> {
    if (!ingredient.name || !ingredient.price || !ingredient.quantity || !ingredient.unit) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }
    if (ingredients.some(i => i.name === ingredient.name)) {
      alert("Este ingrediente já está na lista.");
      return;
    }
    await addDocument<Ingredient>(Endpoints.ingredients, ingredient);
    (document.getElementById("ingredient-form") as HTMLFormElement)?.reset();
    setShowAddIngredientMenu(false);
    setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
  }

  function getIngredientValuesToAdd(): Ingredient {
    return {
      name: (document.getElementById("ingredient-name") as HTMLInputElement)?.value || "",
      price: helpers.parseDecimal((document.getElementById("ingredient-price") as HTMLInputElement)?.value) || 0,
      quantity: helpers.parseDecimal((document.getElementById("ingredient-quantity") as HTMLInputElement)?.value) || 0,
      unit: (document.getElementById("ingredient-unit") as HTMLInputElement)?.value || "",
      used_in_frame_15: helpers.parseDecimal((document.getElementById("ingredient-frame15") as HTMLInputElement)?.value) || 0,
      used_in_frame_25: helpers.parseDecimal((document.getElementById("ingredient-frame25") as HTMLInputElement)?.value) || 0,
      used_in_frame_35: helpers.parseDecimal((document.getElementById("ingredient-frame35") as HTMLInputElement)?.value) || 0,
    };
  }

  async function handleDelIngredient(id: string): Promise<void> {
    if (await checkIngredientIsUsedInBundles(id)) {
      alert("Este ingrediente está sendo usado em um conjunto e não pode ser removido.");
      return;
    }
    if (await checkIngredientIsUsedInCakes(id)) {
      alert("Este ingrediente está sendo usado em um bolo e não pode ser removido.");
      return;
    }

    if (window.confirm("Tem certeza que deseja remover este ingrediente?")) {
      await deleteDocument(Endpoints.ingredients, id);
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
    }
  }

  async function checkIngredientIsUsedInBundles(ingredientId: string): Promise<boolean> {
    const bundles = await getDocuments<Bundle>(Endpoints.bundles);
    return bundles.some(bundle => bundle.ingredients.some(ingredient => ingredient.id === ingredientId));
  }

  async function checkIngredientIsUsedInCakes(ingredientId: string): Promise<boolean> {
    const cakes = await getDocuments<Cake>(Endpoints.cakes);
    return cakes.some(cake => cake.ingredients!.some(ingredient => ingredient.id === ingredientId));
  }

  return (
    <div>
      <h1>Lista de Ingredientes</h1>

      <Button label={showAddIngredientMenu ? "Fechar menu" : "Abrir menu"} onClick={() => setShowAddIngredientMenu(prev => !prev)} />
      {<IngredientForm handleOnClick={() => handleAddIngredient(getIngredientValuesToAdd())} handleCloseMenu={() => setShowAddIngredientMenu(false)} />}

      {ingredients.length === 0 ? <p>Nenhum ingrediente encontrado.</p> : (
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
                <td>{ingredient.used_in_frame_15 || Common.noTableItemFoundContent}</td>
                <td>{ingredient.used_in_frame_25 || Common.noTableItemFoundContent}</td>
                <td>{ingredient.used_in_frame_35 || Common.noTableItemFoundContent}</td>
                <td><Button label={Common.deleteButtonLabel} onClick={() => handleDelIngredient(ingredient.id!)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}