import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import ShowDetail from './ShowDetails';
import Favourites from './Favourites';
// import NotFound from './NotFound';- a NotFound component

function RoutesComponent() {
  return (
    <>
      <ShowDetail />
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showdetail/:id" element={<ShowDetail />} />
        <Route path="/favorites" element={<Favourites />} />     
      </Routes>
      <Footer /> 
    </>
  );
}
// <Route path="*" element={<NotFound />} /> {/* 404 route */}
export default RoutesComponent;
