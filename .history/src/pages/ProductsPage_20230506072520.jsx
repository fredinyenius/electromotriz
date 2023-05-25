import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsGallery from "../components/products/gallery/ProductsGallery";
import ProductsWrapper from "../components/products/ProductsWrapper";
import useProducts from "../hooks/useProducts";
import { fetchReadProducts } from "../redux/thunks/productsThunk";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { loading, products } = useProducts();

  useEffect(() => {
    document.title = '¡Productos! Calzado Dep';
  }, []);
  
  useEffect(() => {
    dispatch(fetchReadProducts());
  }, []);

  return (
    <ProductsWrapper
      loading={loading}
      title="Productos"
      image="https://res.cloudinary.com/dqa9xrcf6/image/upload/v1676114140/strapi-content/productos/farmacias-1_jih9mh.webp"
    >
      <ProductsGallery products={products} />
    </ProductsWrapper>
  );
};
export default ProductsPage;