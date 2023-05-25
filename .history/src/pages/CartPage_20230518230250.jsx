//import { useEffect, useState } from "react";
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async() => {
        e.preventDefaul();

        const {error, createPaymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            cart: elements.getElement(CardElement)
        })

        

    }
    return (
        <Elements>
            <form onSubmit={handleSubmit}>
            <CardElement/>
            <button>
                Buy
            </button>

        </form>
        
        </Elements>

    )
}
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
export default CheckoutForm;