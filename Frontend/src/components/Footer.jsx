import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">CropGuard</h3>
            <p className="text-gray-600">
              Protecting your crops with advanced AI technology for early disease detection and prevention.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-green-600">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-green-600">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@cropguard.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Agriculture St, Farmland, FL</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} CropGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;