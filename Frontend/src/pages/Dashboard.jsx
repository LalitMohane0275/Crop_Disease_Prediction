import React from 'react';

function Dashboard() {
  return (
    <div className="bg-green-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Image for Analysis</h2>
          <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">Drag and drop your crop image here or click to upload</p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Upload Image
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Analysis</h3>
            <p className="text-gray-600">No recent analysis found. Upload an image to get started.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Health Statistics</h3>
            <p className="text-gray-600">Track your crop health statistics here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;