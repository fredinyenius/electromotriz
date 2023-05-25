import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51N9HckIpxHMbLOnt6xmmXS30ps4c2QtL4VGvXy7wyOHYmwVMgixkw59UZqLJFrK9rM9XEspDNBibwuC5dZrQXf8w00aTh4EZRg")

import './App.css';
import { store } from './redux/store';
import { primaryRoute } from './routes/primaryRoute';




function App() {
  return (
    
    <Provider store={store}  > 
         <Elements stripe={stripePromise}>  
      <RouterProvider router={primaryRoute} />
         </Elements>
    </Provider>
    
  );
}

export default App;