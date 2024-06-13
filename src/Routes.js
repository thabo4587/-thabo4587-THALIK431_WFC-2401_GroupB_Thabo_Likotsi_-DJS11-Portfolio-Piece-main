import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import ShowDetail from './ShowDetails';
import Favourites from './Favourites';
// import NotFound from './NotFound'; // Assuming you have a NotFound component

function RoutesComponent() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    // Hide footer on specific routes
    //removing footer from sign up page
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
        <Route path ="/showdetails/:id" element={<ShowDetail />} />
        <Route path="/favorites" element={<Favourites />} />
       
      </Routes>
      {showFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}
// <Route path="*" element={<NotFound />} /> {/* 404 route */}
export default RoutesComponent;
