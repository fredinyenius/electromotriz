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
    document.title = 'Electromotriz Elmer';
  }, []);
  
  useEffect(() => {
    dispatch(fetchReadProducts());
  }, []);

  return (
    <ProductsWrapper
      loading={loading}
      title="Productos"
      image="https://content.app-sources.com/s/34221993575793581/uploads/Images/20180806_151845-2267404.jpg"
    >
      <ProductsGallery products={products} />
    </ProductsWrapper>
  );
};
export default ProductsPage;