import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HXrUCCtGSh6VgCGKBeQyzdxOjSm9sMQ2BSRlTDkcqjeRJ0amQuDXrSAUnAV2ht39iUr68WMduwy1jxa13vF0eUr002IyT6BXx20';
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;
