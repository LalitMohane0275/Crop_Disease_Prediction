import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600">CropGuard</Link>
          <div className="space-x-4">
            {isDashboard ? (
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-green-600 hover:text-green-700">Login</Link>
                <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;