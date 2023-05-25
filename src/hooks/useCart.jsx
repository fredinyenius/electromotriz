import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../redux/slices/cartSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const handleAddProduct = (productId) => {
    dispatch(addProductToCart(productId));
    const products = JSON.parse(localStorage.getItem('cartProducts')) || [];
    if (!products.includes(productId)) {
      products.push(productId);
      localStorage.setItem('cartProducts', JSON.stringify(products));
    }
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
    const products = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const updatedProducts = products.filter((id) => id !== productId);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  };

  return [handleAddProduct, handleRemoveProduct, cartProducts];
};

export default useCart;