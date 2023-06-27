import { useEffect, useState } from "react";
import axios from "axios";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
//import "bootswatch/dist/lux/bootstrap.min.css";

const CartPage = () => {

    const stripe = useStripe();
    const elements= useElements();

    const handleSubmit =  async (e) => {
        e.preventDefault();

         const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        if (!error) {
            const { id } = paymentMethod;

            const { data } = await axios.post('http://localhost:3000/api/checkout', {
                id,
                totalPrice:{}
            });
            console.log(data);
        }
    };
    const [cart, setCart] = useState([]);
    
        useEffect(() => {
            const localStorageCart = localStorage.getItem('cart');
            if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
            }
        }, []);
    
        const removeFromCart = (productId) => {
            const updatedCart = cart.filter((product) => product.id !== productId);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
          };
    
        const totalPrice = cart.reduce((total, product) => total + product.precio, 0);
    
    
  return (

  <div >
    
            <br />
            <br />
            <br />
            <br />
            <h2 className="section__title section__title--lg">Carrito de compras</h2>
            <div className="container py-2">
            <form onSubmit={handleSubmit}  >
                <h2 className="text-align-center">Lista de productos</h2>
                <table className="table">
                     
                    <thead className="text-align-center">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">nombre</th>
                        <th scope="col">precio</th>
                        <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map((product, index) => (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>
                            <td className="text-align-center">{product.nombre}</td>
                            <td className="text-align-center">{product.precio}</td>
                            <td className="text-align-center">
                                <button onClick={() => removeFromCart(product.id)}>
                                🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                            <th scope="row">Total</th>
                            <td className="text-align-center">{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            
    
       <div  >
       <CardElement />
      <button >BUY</button> 
       </div>
      
    </form>
    </div>
    </div>
  )
     
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
