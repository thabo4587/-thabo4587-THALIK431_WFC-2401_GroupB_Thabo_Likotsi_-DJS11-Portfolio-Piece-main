import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AudioPod</h1>
        <nav className="flex justify-center">
        <input
            type="text"
            placeholder="Search podcast"
            className="w-84 md:w-48 sm:w-40 px-4 py-2 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />


          
        </nav>
      </div>
    </header>
  );
}
//focus shadow on searchbar
export default Header;
