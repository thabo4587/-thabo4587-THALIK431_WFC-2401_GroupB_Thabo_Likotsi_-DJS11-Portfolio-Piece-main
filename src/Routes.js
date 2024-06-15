import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import ShowDetail from './ShowDetails';
import Favourites from './Favourites';

function RoutesComponent({ addToFavorites }) {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/login') {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showdetails/:id" element={<ShowDetail addToFavorites={addToFavorites} />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default RoutesComponent;
