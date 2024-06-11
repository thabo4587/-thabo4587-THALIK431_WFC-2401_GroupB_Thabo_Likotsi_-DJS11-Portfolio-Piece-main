import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import Login from './Login';
import SignIn from './SignIn';
import Header from './Header';
import HomePage from './HomePage'
import ShowDetail from './ShowDetails';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Favourites from './Favourites'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <SignIn />
    <Header />
    <HomePage />
    <Footer />
    <ShowDetail />
    <Favourites />
  </React.StrictMode>
);


reportWebVitals();



      