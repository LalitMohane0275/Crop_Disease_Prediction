from pymongo import MongoClient

# Database connection setup
def get_db():
    client = MongoClient("mongodb://localhost:27017/")  
    db = client['crop_disease_prediction']
    return db
