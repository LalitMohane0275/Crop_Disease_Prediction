from flask import Blueprint, request, jsonify
from models.prediction_model import create_prediction, get_prediction_by_id, get_predictions_for_user
from services.prediction_service import predict

# Create a Blueprint for the prediction routes
prediction_bp = Blueprint('prediction', __name__)

@prediction_bp.route('/predict', methods=['POST'])
def make_prediction():
    try:
        data = request.json
        user_id = data.get('user_id')
        image_url = data.get('image_url')
        crop = data.get('crop')
        
        if not user_id or not image_url or not crop:
            return jsonify({'error': 'Missing user_id, image_url, or crop in request body'}), 400

        # Call the service to make a prediction
        result = predict_crop(user_id, image_url, crop)
        return jsonify({'user_id': user_id, 'crop': crop, 'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@prediction_bp.route('/prediction/<prediction_id>', methods=['GET'])
def get_prediction(prediction_id):
    prediction = get_prediction_by_id(prediction_id)

    if not prediction:
        return jsonify({"error": "Prediction not found"}), 404

    return jsonify({
        "user_id": prediction["user"],
        "image_url": prediction["image_url"],
        "disease": prediction["disease"],
        "predictionDate": prediction["predictionDate"]
    })

@prediction_bp.route('/user_predictions/<user_id>', methods=['GET'])
def get_user_predictions(user_id):
    predictions = get_predictions_for_user(user_id)
    
    if not predictions:
        return jsonify({"error": "No predictions found for this user"}), 404

    return jsonify(predictions), 200
