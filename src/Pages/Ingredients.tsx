import "@styles/Table.css";
import type { Ingredient } from "@models/Ingredient";
import { helpers } from "@helpers/helpers";
import { Button } from "@components/Button";
import { Endpoints } from "@data/Endpoints";
import { useEffect, useState } from "react";
import { Actions } from "@components/Actions";
import { useItemForm } from "@hooks/useItemForm";
import { useColumnSort } from "@hooks/useColumnSort";
import { IngredientForm } from "@components/IngredientForm";
import { getDocuments, addDocument, deleteDocument, updateDocument } from "@requests/requests";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { SearchBar } from "@components/SearchBar";
import { useSearch } from "@hooks/useSearch";

export function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const {showAddItemMenu, setShowAddItemMenu} = useItemForm(false);
  const { searchTerm, setSearchTerm, filteredData } = useSearch(ingredients, ['name', 'unit']);
  const {data, sortColumn, sortDirection, handleSort} = useColumnSort<Ingredient>(filteredData);

  useEffect(() => {
    Promise.resolve(
      getDocuments<Ingredient>(Endpoints.ingredients)
    ).then(data => setIngredients(data));
  }, []);

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
    (document.getElementById("form") as HTMLFormElement)?.reset();
    setShowAddItemMenu(false);
    setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
  }

  function getIngredientValuesToAdd(): Ingredient {
    return {
      name: (document.getElementById("ingredient-name") as HTMLInputElement)?.value || "",
      price: helpers.parseDecimal((document.getElementById("ingredient-price") as HTMLInputElement)?.value) || 0,
      quantity: helpers.parseDecimal((document.getElementById("ingredient-quantity") as HTMLInputElement)?.value) || 0,
      unit: (document.getElementById("ingredient-unit") as HTMLInputElement)?.value || "",
    };
  }

  async function handleEditIngredient(id: string): Promise<void> {
    const ingredientToEdit = ingredients.find(ingredient => ingredient.id === id);
    const updatedIngredient = helpers.promptEditIngredient(ingredientToEdit!);
    if (updatedIngredient === ingredientToEdit) {
      return;
    }

    await updateDocument<Ingredient>(Endpoints.ingredients, id, updatedIngredient);
    setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
  }

  async function handleDelIngredient(id: string): Promise<void> {
    if (await helpers.checkIngredientIsUsedInBundles(id)) {
      alert("Este ingrediente está sendo usado em um conjunto e não pode ser removido.");
      return;
    }
    if (await helpers.checkIngredientIsUsedInCakes(id)) {
      alert("Este ingrediente está sendo usado em um bolo e não pode ser removido.");
      return;
    }

    if (window.confirm("Tem certeza que deseja remover este ingrediente?")) {
      await deleteDocument(Endpoints.ingredients, id);
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
    }
  }

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) setShowAddItemMenu(false); }}>
      <h1>Ingredientes</h1>

      <Button label={showAddItemMenu ? "Fechar menu" : "Adicionar Ingrediente"} icon={!showAddItemMenu && <RiMenuUnfold3Line size={20} />} onClick={() => setShowAddItemMenu(prev => !prev)} />
      {<IngredientForm handleSubmit={() => handleAddIngredient(getIngredientValuesToAdd())} handleCloseMenu={() => setShowAddItemMenu(false)} />}

      <SearchBar 
        value={searchTerm} 
        onChange={setSearchTerm}
        placeholder="Buscar por nome ou unidade..."
      />

      {ingredients.length === 0 ? <p>Nenhum ingrediente encontrado.</p> : (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Nome {sortColumn === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("price")}>
                Preço {sortColumn === "price" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("quantity")}>
                Quantidade {sortColumn === "quantity" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("unit")}>
                Unidade {sortColumn === "unit" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="static">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(ingredient => (
              <tr key={ingredient.id}>
                <td>{ingredient.name}</td>
                <td>{ingredient.price}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.unit}</td>
                <Actions
                  handleEdit={() => handleEditIngredient(ingredient.id!)}
                  handleDelete={() => handleDelIngredient(ingredient.id!)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}