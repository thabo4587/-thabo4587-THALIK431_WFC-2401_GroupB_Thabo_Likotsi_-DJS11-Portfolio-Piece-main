import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import ShowDetail from './ShowDetails';
import Favourites from './Favourites';

//state for rendering header and footer
function RoutesComponent({ addToFavorites }) {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);


  //login page and signup page toggling nav and foot upon render
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/login') {
      setShowHeader(false);
      setShowFooter(true); //change to remove footer from sign up form
    } else {
      setShowHeader(true);
      setShowFooter(true);
    }
  }, [location.pathname]);
//dependency array is path so it listens to changes in the path
  return (
    <>
      {showHeader && <Header />}
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
