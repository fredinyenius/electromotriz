import { useSelector } from "react-redux";

const useProducts = () => {
  return (useSelector(state => state.products));
};

export default useProducts;