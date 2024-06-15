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
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AudioPod</h1>
        <nav className="flex items-center">
          <NavLink
            to="/"
            exact
            className="text-white font-bold px-4 py-2 rounded-md mx-2 hover:bg-blue-600"
            activeClassName="bg-blue-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className="text-white font-bold px-4 py-2 rounded-md mx-2 hover:bg-blue-600"
            activeClassName="bg-blue-600"
          >
            Favorites
          </NavLink>
          <button
            className="text-white font-bold px-4 py-2 rounded-md mx-2 bg-transparent border border-white hover:bg-white hover:text-blue-500 focus:outline-none"
            onClick={handleResetHistory}
          >
            Reset History
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
