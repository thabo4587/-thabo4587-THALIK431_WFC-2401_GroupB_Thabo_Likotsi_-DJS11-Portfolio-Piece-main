import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignIn';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import ShowDetail from './ShowDetails';
import Favourites from './Favourites';

function RoutesComponent() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/show/:id" element={<ShowDetail />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default RoutesComponent;
