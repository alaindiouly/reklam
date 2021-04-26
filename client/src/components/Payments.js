import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { useDispatch } from 'react-redux';

function Payments() {
  const dispatch = useDispatch();
  return (
    <StripeCheckout
      name={'Emaily'}
      description={'$5 for 5 Emails'}
      amount={500}
      token={(token) => dispatch(actions.handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='btn orange'>ADD CREDITS</button>
    </StripeCheckout>
  );
}

export default Payments;
