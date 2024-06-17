import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleResetHistory = () => {
    // Perform reset history logic here to be implemented later
    navigate('/');
  };

  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <h1 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-0">AudioPod</h1>
        <nav className="flex flex-col sm:flex-row items-center">
          <NavLink
            to="/"
            exact
            className="text-white font-bold px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mx-2 hover:bg-red-700"
            activeClassName="bg-orange-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="text-white font-bold px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mx-2 hover:bg-red-700"
            activeClassName="bg-orange-600"
          >
            Favorites
          </NavLink>
          <button
            className="text-white font-bold px-3 py-2 rounded-md sm:mx-2 bg-transparent border border-white hover:bg-white hover:text-blue-500 focus:outline-none"
            onClick={handleResetHistory}
          >
            LogOut
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
