import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/thunks/categoryThunk";
import {
  fetchCreateProduct,
  fetchEditProduct,
} from "../../redux/thunks/productsThunk";

const initialFormValues = {
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

export const ProductForm = ({ initialValues, onSuccess, onFail }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(
    initialValues ?? initialFormValues
  );
  const categories = useSelector((state) => state.categories.items);

  const updateState = (attrib, value) => {
    setFormState({
      ...formState,
      [attrib]: value,
    });
  };

  const reset = () => {
    setFormState(initialFormValues);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    setFormState(initialValues ?? initialFormValues);
  }, [initialValues]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //TODO: validate form
    const body = {
      id: undefined,
      nombre: formState.name,
      precio: formState.price,
      stock: formState.stock,
      disponible: formState.available,
      descripcion: formState.description,
      imagen: formState.image,
      procedencia: formState.origin,
      categoriaId: formState.category,
      slug: formState.slug,
    };
    let response;
    if (initialValues?.id) {
      response = await dispatch(fetchEditProduct({id: initialValues.id, body}));
    } else {
      response = await dispatch(fetchCreateProduct(body));
    }
    if (response.error) {
      onFail && onFail();
      return;
    }
    onSuccess && onSuccess();
    reset();
  };

  const onInputChange =
    (name, type: "string" | "number" | "boolean" = "string") =>
    (e) => {
      if (type === "number") {
        updateState(name, Number(e.target.value));
        return;
      }
      if (type === "boolean") {
        updateState(name, Boolean(e.target.checked));
        return;
      }
      updateState(name, e.target.value);
    };

  return (
    <div className="">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="label">Nombre</label>
          <input
            type="name"
            className="input input--block"
            value={formState.name}
            onChange={onInputChange("name")}
          />
        </div>
        <div className="form-group">
          <label className="label">Precio</label>
          <input
            type="number"
            step={0.01}
            min={0}
            className="input input--block"
            value={formState.price}
            onChange={onInputChange("price", "number")}
          />
        </div>
        <div className="form-group">
          <label className="label">Stock</label>
          <input
            type="number"
            step={1}
            min={0}
            className="input input--block"
            value={formState.stock}
            onChange={onInputChange("stock", "number")}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            className="input"
            checked={formState.available}
            onChange={onInputChange("stock", "boolean")}
          />
          <label className="label">Disponible</label>
        </div>
        <div className="form-group">
          <label className="label">Descripcion</label>
          <textarea
            className="input input--block"
            value={formState.description}
            onChange={onInputChange("description")}
          />
        </div>
        <div className="form-group">
          <label className="label">Imagen</label>
          <input
            type="url"
            className="input input--block"
            value={formState.image}
            onChange={onInputChange("image")}
          />
        </div>
        <div className="form-group">
          <label className="label">Procedencia</label>
          <input
            type="name"
            className="input input--block"
            value={formState.origin}
            onChange={onInputChange("origin")}
          />
        </div>
        <div className="form-group">
          <label className="label">Categoria</label>
          <select
            name="category"
            className="input input--block"
            value={formState.category}
            onChange={onInputChange("category", "number")}
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="label">Slug</label>
          <input
            type="name"
            className="input input--block"
            value={formState.slug}
            onChange={onInputChange("slug")}
          />
        </div>
        <div className="form-group t-align-center">
          <button type="submit" className="button button--primary ">
            {formState.id ? "Editar" : "Crear"} Producto
          </button>
        </div>
      </form>
    </div>
  );
};
