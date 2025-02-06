import os
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import requests

# Assuming model paths are stored in a dictionary
MODEL_PATHS = {
    'grapes': 'saved_model/mobilenetv3_small_trained_(50_Epoch)4.keras',
    'rice': 'models/rice_model.keras',
    'corn': 'models/corn_model.keras'
}

# Preprocessing function
def preprocess_image(image_url):
    try:
        response = requests.get(image_url)
        response.raise_for_status()
        image = Image.open(io.BytesIO(response.content))
        image = image.resize((224, 224))  # Resize image to the model's expected input size
        image_array = np.array(image) / 255.0  # Normalize pixel values
        image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
        return image_array
    except Exception as e:
        raise ValueError(f"Error processing image: {str(e)}")

# Prediction function
def predict_crop(user_id, image_url, crop):
    try:
        # Check if the model for the specified crop exists
        if crop not in MODEL_PATHS:
            raise ValueError(f"No model found for crop: {crop}")

        model_path = MODEL_PATHS[crop]
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model file not found at path: {model_path}")

        # Load the corresponding model
        model = load_model(model_path)

        # Preprocess the image
        image_data = preprocess_image(image_url)

        # Predict using the model
        prediction = model.predict(image_data)
        predicted_label = np.argmax(prediction, axis=1)[0]  # Get the index of the highest probability
        return {'label': int(predicted_label), 'confidence': float(np.max(prediction))}
    except Exception as e:
        raise ValueError(f"Error in prediction service: {str(e)}")
