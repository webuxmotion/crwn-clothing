import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { signOutStart } from '../../redux/user/user.actions';

import { 
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, isCartDropdown, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/running">RUNNING</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {
        currentUser 
          ? <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
          : <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { isCartDropdown ? <CartDropdown /> : null }
  </HeaderContainer>
);

export default connect(
  createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartDropdown: (state) => !selectCartHidden(state)
  }),
  dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  })
)(Header);
