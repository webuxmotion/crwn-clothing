import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser, isCartDropdown }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">SHOP</Link>
      <Link to="/running" className="option">RUNNING</Link>
      <Link to="/contact" className="option">CONTACT</Link>
      {
        currentUser 
          ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    { isCartDropdown ? <CartDropdown /> : null }
  </div>
);

export default connect(
  createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartDropdown: (state) => !selectCartHidden(state)
  })
)(Header);
