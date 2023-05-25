import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("sk_test_51N9HckIpxHMbLOntuAHHZRgaYFDAFZVkFDT8gO96Fda1pgFCfbjm1GEftYrbTW4OPgREYcGmOeCVYJWtaZuTK6Bq00BRfIY2mN")

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