//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { peruvianCurrencyFormat } from "../../../utils/utils";
import ContainersImage from "../../common/containers/ContainersImage";
//import useCart from "../../../hooks/useCart"
//import useProducts from "../../../hooks/useProducts";
//import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductsGallery = ({ products }) => {

  const [cart, setCart] = useState([]);

  const handleAddProduct = (productId) => {
    const product = products.find((p) => p.id === productId);
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };
  
  return (
    products.length > 0 ?
      <div className="d-flex f-direction-column gap-lg">
        <ul className="list g-elements g-elements--products-gallery gap-md">
          {products.map(element => {
            const { id, nombre, precio, imagen, procedencia, stock, slug } = element;
            return (
              <li key={id} className="card card--products">
                {/* <button
                  className="button button--primary button--circle button--products"
                >
                  <BsCartPlus />
                </button> */}
                <Link to={`/productos/${slug}`}>
                  <ContainersImage
                    src={imagen}
                    alt={nombre}
                    className="card__header-img card__header-img--products"
                  />
                </Link>
                <div className="card__body card__body--products">
                  <h3 className="card__subtitle card__subtitle--sm">Calzado Dep</h3>
                  <Link to={`/productos/${slug}`} className="card__title">{nombre}</Link>
                  <div className="f-elements gap-3xs">
                    <p className="badge">{procedencia}</p>
                    <p className="badge badge--primary">{stock}</p>
                  </div>
                  <h4 className="card__highlighted mt-auto">{peruvianCurrencyFormat(precio)}</h4>
                  <button
                    className="button button--primary"
                    onClick={() => handleAddProduct(id)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </li>
            );
          })}
        </ul >
        
        {/*
          productsPage < productsMeta.pagination?.pageCount
          &&
          <button
            className="button button--primary button--lg a-self-center"
            onClick={() => dispatch(incrementProductsPage())}
          >
            Ver más
          </button>
        */}
      </div >
      :
      <h3 className="section__subtitle t-align-center f-elements f-elements--center">😢 No hay productos disponibles 😢</h3>
  );
};

export default ProductsGallery;