import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import RunningPage from './pages/running/running.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/running' component={RunningPage} />
          <Route 
            exact 
            path='/signin' 
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    currentUser: selectCurrentUser
  }),
  dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  })
)(App);
