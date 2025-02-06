import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import { toast } from 'react-toastify';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600">CropGuard</Link>
          <div className="space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Welcome, {username}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Logout
                </button>
              </div>
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