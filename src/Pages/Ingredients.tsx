import "@styles/Table.css";
import type { Ingredient } from "@models/Ingredient";
import { helpers } from "@helpers/helpers";
import { Button } from "@components/Button";
import { Endpoints } from "@data/Endpoints";
import { useEffect, useState } from "react";
import { Actions } from "@components/Actions";
import { useColumnSort } from "@hooks/useColumnSort";
import { IngredientForm } from "@components/IngredientForm";
import { getDocuments, addDocument, deleteDocument, updateDocument } from "@requests/requests";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { SearchBar } from "@components/SearchBar";
import { useSearch } from "@hooks/useSearch";
import { ConfirmDialog } from "@components/ConfirmDialog";
import { Modal } from "@components/Modal";
import { useModal } from "@hooks/useModal";
import { useToastContext } from "@hooks/useToastContext";

export function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<Ingredient | null>(null);
  const { searchTerm, setSearchTerm, filteredData } = useSearch(ingredients, ['name', 'unit']);
  const {data, sortColumn, sortDirection, handleSort} = useColumnSort<Ingredient>(filteredData);
  const confirmDelete = useModal();
  const formModal = useModal();
  const toast = useToastContext();

  useEffect(() => {
    Promise.resolve(
      getDocuments<Ingredient>(Endpoints.ingredients)
    ).then(data => setIngredients(data));
  }, []);

  function openAddModal() {
    setEditingItem(null);
    formModal.open();
  }

  function openEditModal(ingredient: Ingredient) {
    setEditingItem(ingredient);
    formModal.open();
  }

  function closeFormModal() {
    formModal.close();
    setEditingItem(null);
    // Reset form
    const form = document.getElementById("ingredient-form") as HTMLFormElement;
    form?.reset();
  }

  async function handleSubmit(): Promise<void> {
    const ingredient = getIngredientValuesFromForm();
    
    if (!ingredient.name || !ingredient.price || !ingredient.quantity || !ingredient.unit) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }

    if (editingItem) {
      // Update existing ingredient
      await updateDocument<Ingredient>(Endpoints.ingredients, editingItem.id!, ingredient);
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
      toast.success("Ingrediente atualizado com sucesso!");
    } else {
      // Add new ingredient
      if (ingredients.some(i => i.name === ingredient.name)) {
        toast.error("Este ingrediente já está na lista.");
        return;
      }
      await addDocument<Ingredient>(Endpoints.ingredients, ingredient);
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
      toast.success("Ingrediente adicionado com sucesso!");
    }
    
    closeFormModal();
  }

  function getIngredientValuesFromForm(): Ingredient {
    return {
      name: (document.getElementById("ingredient-name") as HTMLInputElement)?.value || "",
      price: helpers.parseDecimal((document.getElementById("ingredient-price") as HTMLInputElement)?.value) || 0,
      quantity: helpers.parseDecimal((document.getElementById("ingredient-quantity") as HTMLInputElement)?.value) || 0,
      unit: (document.getElementById("ingredient-unit") as HTMLSelectElement)?.value || "",
    };
  }

  async function handleDelIngredient(id: string): Promise<void> {
    if (await helpers.checkIngredientIsUsedInBundles(id)) {
      toast.error("Este ingrediente está sendo usado em um conjunto e não pode ser removido.");
      return;
    }
    if (await helpers.checkIngredientIsUsedInCakes(id)) {
      toast.error("Este ingrediente está sendo usado em um bolo e não pode ser removido.");
      return;
    }

    setSelectedId(id);
    confirmDelete.open();
  }

  async function handleConfirmDelete(): Promise<void> {
    if (selectedId) {
      await deleteDocument(Endpoints.ingredients, selectedId);
      setIngredients(await getDocuments<Ingredient>(Endpoints.ingredients));
      toast.success("Ingrediente removido com sucesso!");
      confirmDelete.close();
      setSelectedId(null);
    }
  }

  return (
    <div>
      <h1>Ingredientes</h1>

      <Button 
        label="Adicionar Ingrediente" 
        icon={<RiMenuUnfold3Line size={20} />} 
        onClick={openAddModal} 
      />

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
                  handleEdit={() => openEditModal(ingredient)}
                  handleDelete={() => handleDelIngredient(ingredient.id!)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal 
        isOpen={formModal.isOpen} 
        onClose={closeFormModal}
        title={editingItem ? "Editar Ingrediente" : "Adicionar Ingrediente"}
        size="small"
      >
        <IngredientForm
          initialValues={editingItem}
          onSubmit={handleSubmit}
          onCancel={closeFormModal}
          isEditing={!!editingItem}
        />
      </Modal>

      <ConfirmDialog
        isOpen={confirmDelete.isOpen}
        title="Remover Ingrediente"
        message="Tem certeza que deseja remover este ingrediente?"
        confirmText="Remover"
        cancelText="Cancelar"
        variant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={confirmDelete.close}
      />
    </div>
  );
}