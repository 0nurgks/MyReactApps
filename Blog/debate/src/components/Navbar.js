// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">
            My Blog
          </Link>
          <div>
            <Link to="/admin" className="px-4 py-2 hover:bg-gray-700 rounded">Admin</Link>
            {/* Add more navigation links as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
