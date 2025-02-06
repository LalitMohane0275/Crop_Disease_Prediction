import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// Hardcoded predictions for demonstration
const mockPredictions = {
  cotton: {
    disease: 'Bacterial Blight',
    confidence: '92%',
    description: 'Bacterial blight is a serious disease affecting cotton plants. It causes angular leaf spots and can significantly reduce crop yield.',
    treatment: [
      'Remove and destroy infected plant debris',
      'Use disease-resistant varieties',
      'Apply copper-based bactericides',
      'Maintain proper field drainage'
    ]
  }
};

function PredictDisease() {
  const { crop } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
    }
  };

  const handlePredict = () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setPrediction(mockPredictions[crop.toLowerCase()]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-green-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">
          {crop} Disease Detection
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <div className="flex flex-col items-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mb-4 max-h-64 rounded-lg"
                    />
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handlePredict}
            disabled={!selectedImage || isLoading}
            className={`w-full px-4 py-2 text-white rounded-lg transition-colors ${
              !selectedImage || isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isLoading ? 'Analyzing...' : 'Predict Disease'}
          </button>
        </div>

        {prediction && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Detected Disease:</h3>
                <p className="text-gray-600">{prediction.disease}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Confidence:</h3>
                <p className="text-gray-600">{prediction.confidence}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Description:</h3>
                <p className="text-gray-600">{prediction.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Recommended Treatment:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {prediction.treatment.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictDisease;