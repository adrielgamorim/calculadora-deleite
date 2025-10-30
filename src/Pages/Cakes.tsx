import type { Cake } from "@models/Cake";
import type { Bundle } from "@models/Bundle";
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { Frames } from "@data/Frames";
import { helpers } from "@helpers/helpers";
import { Button } from "@components/Button";
import { Endpoints } from "@data/Endpoints";
import { useEffect, useState } from "react";
import { CakeForm } from "@components/CakeForm";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { useColumnSort } from "@hooks/useColumnSort";
import { getDocuments, addDocument, deleteDocument, updateDocument } from "@requests/requests";
import { SearchBar } from "@components/SearchBar";
import { useSearch } from "@hooks/useSearch";
import { ConfirmDialog } from "@components/ConfirmDialog";
import { Modal } from "@components/Modal";
import { useModal } from "@hooks/useModal";
import { useToastContext } from "@hooks/useToastContext";
import { Actions } from "@components/Actions";

export function Cakes() {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>([]);
  const [selectedBundleIds, setSelectedBundleIds] = useState<string[]>([]);
  const [ingredientQuantities, setIngredientQuantities] = useState<Map<string, number>>(new Map());
  const [bundleIngredientQuantities, setBundleIngredientQuantities] = useState<Map<string, Map<string, number>>>(new Map());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<Cake | null>(null);
  const { searchTerm, setSearchTerm, filteredData } = useSearch(cakes, ['name', 'frame']);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Cake>(filteredData);
  const confirmDelete = useModal();
  const formModal = useModal();
  const toast = useToastContext();

  useEffect(() => {
    Promise.all([
      getDocuments<Cake>(Endpoints.cakes),
      getDocuments<Ingredient>(Endpoints.ingredients),
      getDocuments<Bundle>(Endpoints.bundles)
    ]).then(async ([cakesData, ingredientsData, bundlesData]) => {
      setCakes(cakesData);
      setIngredients(ingredientsData);
      // Hydrate bundles before setting them so form can access hydratedIngredients
      const hydratedBundles = await helpers.pullBundlesWithIngredients(bundlesData);
      setBundles(hydratedBundles);
    });
  }, []);

  useEffect(() => {
      (async () => {
        setCakes(await helpers.pullCakesWithIngredients(cakes));
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bundles]);

  function openAddModal(): void {
    setEditingItem(null);
    setSelectedIngredientIds([]);
    setSelectedBundleIds([]);
    setIngredientQuantities(new Map());
    setBundleIngredientQuantities(new Map());
    formModal.open();
  }

  function openEditModal(cake: Cake): void {
    setEditingItem(cake);
    
    // Reconstruct direct ingredients state
    const ingIds = cake.ingredients?.map(i => i.ingredientId) || [];
    const ingQty = new Map(cake.ingredients?.map(i => [i.ingredientId, i.quantity]) || []);
    
    // Reconstruct bundles state
    const bundleIds = cake.bundles?.map(b => b.id) || [];
    const bundleQty = new Map(
      cake.bundles?.map(b => [
        b.id,
        new Map(b.ingredientQuantities.map(iq => [iq.ingredientId, iq.quantity]))
      ]) || []
    );
    
    setSelectedIngredientIds(ingIds);
    setIngredientQuantities(ingQty);
    setSelectedBundleIds(bundleIds);
    setBundleIngredientQuantities(bundleQty);
    formModal.open();
  }

  function closeFormModal(): void {
    setEditingItem(null);
    setSelectedIngredientIds([]);
    setSelectedBundleIds([]);
    setIngredientQuantities(new Map());
    setBundleIngredientQuantities(new Map());
    formModal.close();
  }

  async function handleSubmit(): Promise<void> {
    const name = (document.getElementById("cake-name") as HTMLInputElement)?.value || "";
    const frame = (document.getElementById("cake-frame") as HTMLSelectElement)?.value as Frames;

    if (!name) {
      toast.error("Por favor, preencha o campo Nome.");
      return;
    }

    if (!frame) {
      toast.error("Por favor, selecione o tamanho do Bolo.");
      return;
    }

    if (selectedIngredientIds.length + selectedBundleIds.length === 0) {
      toast.error("Por favor, selecione pelo menos um ingrediente ou conjunto.");
      return;
    }

    // Build complete cake structure
    const cakeData: Cake = {
      name,
      frame,
      ingredients: selectedIngredientIds.map(ingredientId => ({
        ingredientId,
        quantity: ingredientQuantities.get(ingredientId) || 0
      })),
      bundles: selectedBundleIds.map(bundleId => ({
        id: bundleId,
        ingredientQuantities: Array.from(bundleIngredientQuantities.get(bundleId)?.entries() || []).map(([ingredientId, quantity]) => ({
          ingredientId,
          quantity
        }))
      }))
    };

    if (editingItem?.id) {
      await updateDocument<Cake>(Endpoints.cakes, editingItem.id, cakeData);
      toast.success("Bolo atualizado com sucesso!");
    } else {
      await addDocument<Cake>(Endpoints.cakes, cakeData);
      toast.success("Bolo adicionado com sucesso!");
    }

    const freshCakes = await getDocuments<Cake>(Endpoints.cakes);
    setCakes(await helpers.pullCakesWithIngredients(freshCakes));
    closeFormModal();
  }

  async function handleDelCake(id: string): Promise<void> {
    setSelectedId(id);
    confirmDelete.open();
  }

  async function handleConfirmDelete(): Promise<void> {
    if (selectedId) {
      await deleteDocument(Endpoints.cakes, selectedId);
      const cakes = await getDocuments<Cake>(Endpoints.cakes);
      setCakes(await helpers.pullCakesWithIngredients(cakes));
      toast.success("Bolo removido com sucesso!");
      confirmDelete.close();
      setSelectedId(null);
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
    return ingredients
      .map(ingredient => ({ value: ingredient.id!, label: ingredient.name }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  function getBundleOptionsForSelect(): { value: string; label: string }[] {
    return bundles
      .map(bundle => ({ value: bundle.id!, label: bundle.name }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  return (
    <>
      <h1>Bolos</h1>

      <Button label="Adicionar Bolo" icon={<RiMenuUnfold3Line size={20} />} onClick={openAddModal} />

      <Modal
        isOpen={formModal.isOpen}
        onClose={closeFormModal}
        title={editingItem ? "Editar Bolo" : "Adicionar Bolo"}
        size="medium"
      >
        <CakeForm
          initialValues={editingItem || undefined}
          onSubmit={handleSubmit}
          onCancel={closeFormModal}
          isEditing={!!editingItem}
          getIngredientOptionsForSelect={getIngredientOptionsForSelect}
          getBundleOptionsForSelect={getBundleOptionsForSelect}
          ingredients={ingredients}
          bundles={bundles}
          selectedIngredientIds={selectedIngredientIds}
          setSelectedIngredientIds={setSelectedIngredientIds}
          selectedBundleIds={selectedBundleIds}
          setSelectedBundleIds={setSelectedBundleIds}
          ingredientQuantities={ingredientQuantities}
          setIngredientQuantities={setIngredientQuantities}
          bundleIngredientQuantities={bundleIngredientQuantities}
          setBundleIngredientQuantities={setBundleIngredientQuantities}
        />
      </Modal>

      <SearchBar 
        value={searchTerm} 
        onChange={setSearchTerm}
        placeholder="Buscar por nome ou tamanho..."
      />

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
                  {cake.hydratedBundles && cake.hydratedBundles.length > 0 ? cake.hydratedBundles.map((hydrated, index) => (
                    <span key={hydrated.id}>
                      {hydrated.bundle.name}
                      {index < cake.hydratedBundles!.length - 1 && Common.tableItemSeparator}
                    </span>
                  )) : (
                    Common.noTableItemFoundContent
                  )}
                </td>
                <td>
                  {cake.hydratedIngredients && cake.hydratedIngredients.length > 0 ? cake.hydratedIngredients.map((hydrated, index) => (
                    <span key={hydrated.ingredientId}>
                      {hydrated.ingredient.name} ({hydrated.quantity}{helpers.convertUnitForDisplay(hydrated.ingredient.unit)})
                      {index < cake.hydratedIngredients!.length - 1 && Common.tableItemSeparator}
                    </span>
                  )) : (
                    Common.noTableItemFoundContent
                  )}
                </td>
                <Actions
                  handleEdit={() => openEditModal(cake)}
                  handleDelete={() => handleDelCake(cake.id!)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ConfirmDialog
        isOpen={confirmDelete.isOpen}
        title="Remover Bolo"
        message="Tem certeza que deseja remover este bolo?"
        confirmText="Remover"
        cancelText="Cancelar"
        variant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={confirmDelete.close}
      />
    </>
  );
}
