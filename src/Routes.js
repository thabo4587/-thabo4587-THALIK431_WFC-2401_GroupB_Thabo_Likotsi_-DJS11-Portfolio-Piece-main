import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignIn';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import ShowDetail from './ShowDetail';
import Favourites from './Favourites';
//need to change sign in to sign up!!some time
function Routes() {
  return (
    <>
    <Header /> 
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/show/:id" component={ShowDetail} />
      <Route path="/favorites" component={Favourites} />
    
    </Switch>
    <Footer /> 
  </>
  );
}

export default Routes;