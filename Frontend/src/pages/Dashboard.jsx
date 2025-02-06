import React from 'react';
import { useNavigate } from 'react-router-dom';

const crops = [
  {
    name: 'Cotton',
    image: 'https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?auto=format&fit=crop&w=800&h=400&q=80',
    description: 'Detect diseases in cotton plants'
  },
  {
    name: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&h=400&q=80',
    description: 'Identify wheat crop diseases'
  },
  {
    name: 'Rice',
    image: 'https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?auto=format&fit=crop&w=800&h=400&q=80',
    description: 'Analyze rice plant health'
  },
  {
    name: 'Corn',
    image: 'https://images.unsplash.com/photo-1601472437431-3fb23c734a21?auto=format&fit=crop&w=800&h=400&q=80',
    description: 'Detect corn crop diseases'
  },
  {
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&h=400&q=80',
    description: 'Identify tomato plant diseases'
  }
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-green-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Crop Disease Detection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <div
              key={crop.name}
              onClick={() => navigate(`/predict/${crop.name.toLowerCase()}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{crop.name}</h3>
                <p className="text-gray-600">{crop.description}</p>
                <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Detect Disease
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;