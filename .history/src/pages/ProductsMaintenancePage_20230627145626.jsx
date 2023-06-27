import React, { useEffect, useRef, useState } from "react";
import Dialog from "../components/common/dialog/Dialog";
import { ProductForm } from "../components/productForm";
import { ProductList } from "../components/productList";
import { useDispatch } from "react-redux";
import {
  fetchDeleteProduct,
  fetchReadProducts,
} from "../redux/thunks/productsThunk";

const initialValues = {
  id: null,
  name: "",
  price: 0.0,
  stock: 0,
  available: true,
  description: "",
  image: "",
  origin: "",
  category: 1,
  slug: "",
};

const ProductMaintenancePage = () => {
  const createModalRef = useRef(null);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onCreateProductHandler = () => {
    setIsModalOpen(true);
    setSelectedProduct(initialValues);
  };

  const onEditProductHandler = (product) => {
    setIsModalOpen(true);
    setSelectedProduct({
      id: product?.id,
      name: product?.nombre,
      price: product?.precio,
      stock: product?.stock,
      available: product?.disponible,
      description: product?.descripcion,
      image: product?.imagen,
      origin: product?.origen,
      category: product?.categoriaId,
      slug: product?.slug,
    });
  };

  const onDeleteProductHandler = (product) => {
    setIsConfirmModalOpen(true);
    setSelectedProduct(product);
  };

  const onSuccessRegisterHandler = () => {
    dispatch(fetchReadProducts());
    setIsModalOpen(false);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(initialValues);
  };

  const onErrorRegisterHandler = (product) => {
    setIsConfirmModalOpen(true);
    setSelectedProduct(product);
  };

  const onDeleteConfirmHandler = async () => {
    const id = selectedProduct?.id;
    if (!id) return;
    await dispatch(fetchDeleteProduct(id));
    setIsConfirmModalOpen(false);
    dispatch(fetchReadProducts())
  };

  const onDeleteCancelHandler = () => {
    setIsConfirmModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchReadProducts());
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="table-title">
        <div className="row">
          <div className="col-6">
            <h2>Mantenimiento de Productos</h2>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Dialog onClose={onCloseModal}>
          <ProductForm
            initialValues={selectedProduct}
            onSuccess={onSuccessRegisterHandler}
            onFail={onErrorRegisterHandler}
          />
        </Dialog>
      )}
      {isConfirmModalOpen && (
        <Dialog onClose={onDeleteCancelHandler}>
          <h1>Confirmar accion</h1>
          <p>Esta seguro de eliminar el registro?</p>
          <div>
            <button onClick={onDeleteCancelHandler} className="button button--secondary">Cancelar</button>
            <button onClick={onDeleteConfirmHandler} className="button button--secondary">Ok</button>
          </div>
        </Dialog>
      )}
      
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <div style={{ textAlign: "right" }}>
          <button
            className="button button--primary" style={{marginBottom: "1rem"}}
            onClick={onCreateProductHandler}
          >
            Nuevo
          </button> 
        </div>
        <ProductList
          onEditHandler={onEditProductHandler}
          onDeleteHandler={onDeleteProductHandler}
        />
      </div>
      
    </div>
  );
};

export default ProductMaintenancePage;
