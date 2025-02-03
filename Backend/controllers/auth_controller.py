from flask import request, jsonify
from models.user_model import create_user
from bson import ObjectId  # Import ObjectId to handle MongoDB IDs
from flask import request, jsonify
from models.user_model import create_user
from pymongo import MongoClient
from werkzeug.security import check_password_hash  # For securely checking password

def login():
    # Get data from the request body
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Validation
    if not username or not password:
        return jsonify({"error": "Both username and password are required"}), 400

    # Connect to MongoDB and check if the user exists
    from db import get_db
    db = get_db()
    user = db['users'].find_one({"username": username})

    if not user:
        return jsonify({"error": "User not found"}), 404

    # Check if the password matches
    if not check_password_hash(user['password'], password):
        return jsonify({"error": "Incorrect password"}), 401

    # Convert ObjectId to string for JSON serialization
    user['_id'] = str(user['_id'])

    return jsonify({"message": "Login successful", "user": user}), 200


def signup():
    # Get data from the request body
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')
    phone = data.get('phone')

    # Validation
    if not username or not password or not confirm_password or not phone:
        return jsonify({"error": "All fields (username, password, confirmPassword, phone) are required"}), 400

    if password != confirm_password:
        return jsonify({"error": "Passwords do not match"}), 400

    if len(phone) != 10 or not phone.isdigit():
        return jsonify({"error": "Phone number must be a valid 10-digit number"}), 400

    # Check if the user already exists
    from db import get_db
    db = get_db()
    existing_user = db['users'].find_one({"username": username})
    if existing_user:
        return jsonify({"error": "Username already exists"}), 400

    # Create a new user
    user = create_user(username, password, phone)

    # Convert ObjectId to string for JSON serialization
    user['_id'] = str(user['_id'])

    return jsonify({"message": "User registered successfully", "user": user}), 201
