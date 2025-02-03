from db import get_db
from werkzeug.security import generate_password_hash  # For securely hashing passwords

# Get the users collection from the database
db = get_db()
users_collection = db['users']

# Function to insert a new user
def create_user(username, password, phone):
    hashed_password = generate_password_hash(password)  # Hash the password
    user = {
        "username": username,
        "password": hashed_password,  # Store the hashed password
        "phone": phone
    }
    users_collection.insert_one(user)
    return user
