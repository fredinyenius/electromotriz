import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

export const stripePromise = loadStripe("pk_test_51N9HckIpxHMbLOnt6xmmXS30ps4c2QtL4VGvXy7wyOHYmwVMgixkw59UZqLJFrK9rM9XEspDNBibwuC5dZrQXf8w00aTh4EZRg");

return <>
<Elements stripe={stripePromise} >
      <CartPage />
</Elements>

</>
    
  
