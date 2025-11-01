import type { Bundle } from "@models/Bundle";
import type { MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import { Common } from "@data/Common";
import { helpers } from "@helpers/helpers";
import { useEffect, useState } from "react";
import { Endpoints } from "@data/Endpoints";
import { Button } from "@components/atoms/Button";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { BundleForm } from "@components/BundleForm";
import { useColumnSort } from "@hooks/useColumnSort";
import { usePagination } from "@hooks/usePagination";
import { getDocuments, addDocument, deleteDocument, updateDocument } from "@requests/requests";
import { SearchBar } from "@components/SearchBar";
import { useSearch } from "@hooks/useSearch";
import { ConfirmDialog } from "@components/ConfirmDialog";
import { Modal } from "@components/Modal";
import { useModal } from "@hooks/useModal";
import { useToastContext } from "@hooks/useToastContext";
import { Actions } from "@components/Actions";
import { FormActions } from "@components/form/FormActions";
import * as Table from "@components/table";
import * as Page from "@components/PageLayout.styled";

export function Bundles() {
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<Bundle | null>(null);
  const { searchTerm, setSearchTerm, filteredData } = useSearch(bundles, ['name']);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Bundle>(filteredData);
  const {
    paginatedData,
    currentPage,
    pageSize,
    totalPages,
    totalItems,
    goToPage,
    setPageSize,
    canGoNext,
    canGoPrevious,
  } = usePagination(data, { initialPageSize: 10 });
  const confirmDelete = useModal();
  const formModal = useModal();
  const toast = useToastContext();

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

  function openAddModal() {
    setEditingItem(null);
    setSelectedIngredientIds([]);
    formModal.open();
  }

  function openEditModal(bundle: Bundle) {
    setEditingItem(bundle);
    // Bundle.ingredients is string[] (IDs)
    setSelectedIngredientIds(bundle.ingredients || []);
    formModal.open();
  }

  function closeFormModal() {
    formModal.close();
    setEditingItem(null);
    setSelectedIngredientIds([]);
  }

  async function handleSubmit(bundle: Bundle): Promise<void> {
    if (!bundle.name) {
      toast.error("Por favor, preencha o Nome.");
      return;
    }
    if (selectedIngredientIds.length <= 1) {
      toast.error("Por favor, selecione pelo menos dois ingredientes.");
      return;
    }

    const bundleData: Bundle = {
      name: bundle.name,
      ingredients: selectedIngredientIds,
    };

    if (editingItem) {
      // Update existing bundle
      await updateDocument<Bundle>(Endpoints.bundles, editingItem.id!, bundleData);
      const freshBundles = await getDocuments<Bundle>(Endpoints.bundles);
      setBundles(await helpers.pullBundlesWithIngredients(freshBundles));
      toast.success("Conjunto atualizado com sucesso!");
    } else {
      // Add new bundle
      await addDocument<Bundle>(Endpoints.bundles, bundleData);
      const freshBundles = await getDocuments<Bundle>(Endpoints.bundles);
      setBundles(await helpers.pullBundlesWithIngredients(freshBundles));
      toast.success("Conjunto adicionado com sucesso!");
    }
    
    closeFormModal();
  }

  async function handleDelBundle(id: string): Promise<void> {
    if (await helpers.checkBundleIsUsedInCakes(id)) {
      toast.error("Este conjunto está sendo usado em um bolo e não pode ser removido.");
      return;
    }
    setSelectedId(id);
    confirmDelete.open();
  }

  async function handleConfirmDelete(): Promise<void> {
    if (selectedId) {
      await deleteDocument(Endpoints.bundles, selectedId);
      const bundles = await getDocuments<Bundle>(Endpoints.bundles);
      setBundles(await helpers.pullBundlesWithIngredients(bundles));
      toast.success("Conjunto removido com sucesso!");
      confirmDelete.close();
      setSelectedId(null);
    }
  }

  function getIngredientOptionsForSelect(): { value: string; label: string }[] {
    return helpers.getIngredientOptionsForSelect(ingredients);
  }

  function handleOptionsChange(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const ids = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedIngredientIds(ids);
  }

  return (
    <Page.PageContainer>
      <Page.PageHeader>
        <Page.PageTitle>Conjuntos</Page.PageTitle>

        <Page.PageActions>
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm}
            placeholder="Buscar por nome."
          />

          <Button onClick={openAddModal} variant="primary">
            <RiMenuUnfold3Line size={20} />
            Adicionar Conjunto
          </Button>
        </Page.PageActions>
      </Page.PageHeader>

      {bundles.length === 0 ? (
        <Page.EmptyState>Nenhum conjunto encontrado.</Page.EmptyState>
      ) : (
        <Table.EntityTable
          data={paginatedData}
          columns={[
            { key: 'name', label: 'Nome' },
            { 
              key: 'hydratedIngredients', 
              label: 'Ingredientes',
              sortable: false,
              render: (bundle) => (
                <>
                  {bundle.hydratedIngredients?.map((ingredient, index) => (
                    <span key={ingredient.id}>
                      {ingredient.name.trim()}
                      {index < bundle.hydratedIngredients!.length - 1 && Common.tableItemSeparator}
                    </span>
                  ))}
                </>
              )
            },
          ]}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
          renderActions={(bundle) => (
            <Actions
              handleEdit={() => openEditModal(bundle)}
              handleDelete={() => handleDelBundle(bundle.id!)}
            />
          )}
          pagination={{
            currentPage,
            totalPages,
            totalItems,
            pageSize,
            onPageChange: goToPage,
            onPageSizeChange: setPageSize,
            canGoPrevious,
            canGoNext,
          }}
        />
      )}

      <Modal 
        isOpen={formModal.isOpen} 
        onClose={closeFormModal}
        title={editingItem ? "Editar Conjunto" : "Adicionar Conjunto"}
        size="small"
        footer={
          <FormActions noDivider>
            <Button type="button" variant="secondary" onClick={closeFormModal}>
              Cancelar
            </Button>
            <Button type="submit" form="bundle-form" variant="primary">
              {editingItem ? "Salvar Alterações" : "Adicionar Conjunto"}
            </Button>
          </FormActions>
        }
      >
        <BundleForm
          initialValues={editingItem}
          onSubmit={handleSubmit}
          onCancel={closeFormModal}
          handleOptionsChange={handleOptionsChange}
          getIngredientOptionsForSelect={getIngredientOptionsForSelect}
          selectedIngredientIds={selectedIngredientIds}
          isEditing={!!editingItem}
          hideActions
        />
      </Modal>

      <ConfirmDialog
        isOpen={confirmDelete.isOpen}
        title="Remover Conjunto"
        message="Tem certeza que deseja remover este conjunto?"
        confirmText="Remover"
        cancelText="Cancelar"
        variant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={confirmDelete.close}
      />
    </Page.PageContainer>
  );
}
