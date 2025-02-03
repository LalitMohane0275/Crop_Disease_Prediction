import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="bg-green-50">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Protect Your Crops with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Early detection of crop diseases using advanced AI technology. Upload photos of your plants and get instant analysis.
          </p>
          <Link 
            to="/signup" 
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 text-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Detection</h3>
            <p className="text-gray-600">Get instant results about crop diseases using our AI-powered analysis.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Solutions</h3>
            <p className="text-gray-600">Receive detailed treatment recommendations from agricultural experts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Track Progress</h3>
            <p className="text-gray-600">Monitor your crop health over time with detailed reporting.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;