from db import get_db
from datetime import datetime
from bson import ObjectId


db = get_db()
predictions_collection = db['predictions']

def create_prediction(user_id, image_url, disease):
    prediction = {
        "user": user_id,
        "image_url": image_url,
        "disease": disease,
        "predictionDate": datetime.now()
    }
    
    # Insert the prediction into the MongoDB collection
    result = predictions_collection.insert_one(prediction)
    return result.inserted_id

def get_prediction_by_id(prediction_id):
    return predictions_collection.find_one({"_id": ObjectId(prediction_id)})

def get_predictions_for_user(user_id):
    predictions = predictions_collection.find({"user": user_id})
    predictions_list = list(predictions)
    
    # Convert ObjectId to string for each prediction
    for prediction in predictions_list:
        prediction["_id"] = str(prediction["_id"])
        
    return predictions_list
