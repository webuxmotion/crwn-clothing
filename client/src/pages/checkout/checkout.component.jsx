import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.compnent';

import './checkout.styles.scss';

const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {headers.map(title => (
        <div key={title} className="header-block">
          <span>{title}</span>
        </div>
      ))}
    </div>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      * Please use the following test credit card for payments
      <br />
      4242 4242 4242 4242 - Exp: 10/21 - CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
);

export default connect(
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  })
)(CheckoutPage);
