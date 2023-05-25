import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/product/ProductDetail";
import { fetchReadProduct } from "../redux/thunks/productsThunk";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchReadProduct(slug));
  }, []);

  return (
    <ProductDetail />
  );
};

export default ProductPage;