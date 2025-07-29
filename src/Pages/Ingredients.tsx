import { useEffect, useState } from "react";
import type { Ingredient } from "@models/Ingredient";
import { getDocuments, addDocument, deleteDocument } from "@helpers/requests";
import { Button } from "@components/Button";

export function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIngredients(await getDocuments("ingredients"));
    };
    fetchData();
  }, []);

  async function handleAddIngredient(): Promise<void> {
    const newIngredient: Ingredient = {
      name: "Farinha",
      price: 4,
      quantity: 1000,
      unit: "g",
      used_in_frame_15: 400,
      used_in_frame_25: 800,
      used_in_frame_35: 1200,
    };
    await addDocument("ingredients", newIngredient);
    setIngredients(await getDocuments("ingredients"));
  }

  async function handleDelIngredient(id: string): Promise<void> {
    if (window.confirm("Tem certeza que deseja remover este ingrediente?")) {
      await deleteDocument("/ingredients/", id);
      setIngredients(await getDocuments("ingredients"));
    }
  }

  return (
    <div>
      <h1>Lista de Ingredientes</h1>
      <p>Aqui você pode ver e adicionar novos ingredientes.</p>

      <span><input type="text" placeholder="Nome do Ingrediente" /></span>
      <span><input type="number" placeholder="Preço" /></span>
      <span><input type="number" placeholder="Quantidade" /></span>
      <span><input type="text" placeholder="Unidade" /></span>
      <span><input type="number" placeholder="Qnt usada no aro 15" /></span>
      <span><input type="number" placeholder="Qnt usada no aro 25" /></span>
      <span><input type="number" placeholder="Qnt usada no aro 35" /></span>
      <Button label="Adicionar Ingrediente" onClick={() => handleAddIngredient()} />

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
              <tr key={ ingredient.id }>
                <td>{ ingredient.name }</td>
                <td>{ ingredient.price }</td>
                <td>{ ingredient.quantity }</td>
                <td>{ ingredient.unit }</td>
                <td>{ ingredient.used_in_frame_15 }</td>
                <td>{ ingredient.used_in_frame_25 }</td>
                <td>{ ingredient.used_in_frame_35 }</td>
                <td><Button label={ "❌" } onClick={() => handleDelIngredient(ingredient.id!)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
}