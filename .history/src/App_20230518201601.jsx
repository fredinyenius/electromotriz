import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js'
import './App.css';
import { store } from './redux/store';
import { primaryRoute } from './routes/primaryRoute';

const stripePromise = loadStripe("pk_test_51N9HckIpxHMbLOnt6xmmXS30ps4c2QtL4VGvXy7wyOHYmwVMgixkw59UZqLJFrK9rM9XEspDNBibwuC5dZrQXf8w00aTh4EZRg")

function App() {
  return (
    <Provider store={store} stripe={stripePromise}>
      
      <RouterProvider router={primaryRoute} />
      
    </Provider>
  );
}

export default App;