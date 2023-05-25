//import { useEffect, useState } from "react";
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';

const CartPage = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Use elements.getElement to get a reference to the mounted Element.
    const cardElement = elements.getElement(CardElement);

    // Pass the Element directly to other Stripe.js methods:
    // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    stripe.createToken(cardElement);

    // or createPaymentMethod - https://stripe.com/docs/js/payment_methods/create_payment_method
    stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
    stripe.confirmCardPayment(paymentIntentClientSecret, {
      payment_method: {
        card: cardElement,
      },
    });
  };
    
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Submit</button>
    </form>
  );
};

export default CartPage;
//const CartPage = () => {
//    const [cart, setCart] = useState([]);
//
//    useEffect(() => {
//        const localStorageCart = localStorage.getItem('cart');
//        if (localStorageCart) {
//        setCart(JSON.parse(localStorageCart));
//        }
//    }, []);
//
//    const removeFromCart = (productId) => {
//        const updatedCart = cart.filter((product) => product.id !== productId);
//        setCart(updatedCart);
//        localStorage.setItem('cart', JSON.stringify(updatedCart));
//      };
//
//    const totalPrice = cart.reduce((total, product) => total + product.precio, 0);
//
//    return (
//        <div>
//            <br />
//            <br />
//            <br />
//            <br />
//            <h2 className="section__title section__title--lg">Carrito de compras</h2>
//            <div className="container py-2">
//                <h2 className="text-align-center">Lista de productos</h2>
//                <table class="table">
//                     
//                    <thead className="text-align-center">
//                        <tr>
//                        <th scope="col">#</th>
//                        <th scope="col">nombre</th>
//                        <th scope="col">precio</th>
//                        <th scope="col">Accion</th>
//                        </tr>
//                    </thead>
//                    <tbody>
//                    {cart.map((product, index) => (
//                        <tr key={product.id}>
//                            <th scope="row">{index + 1}</th>
//                            <td className="text-align-center">{product.nombre}</td>
//                            <td className="text-align-center">{product.precio}</td>
//                            <td className="text-align-center">
//                                <button onClick={() => removeFromCart(product.id)}>
//                                🗑️
//                                </button>
//                            </td>
//                        </tr>
//                    ))}
//                    <tr>
//                            <th scope="row">Total</th>
//                            <td className="text-align-center">{totalPrice}</td>
//                        </tr>
//                    </tbody>
//                </table>
//            </div>
//        </div>
//    );
//}

//export default CartPage;
