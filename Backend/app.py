from flask import Flask
from werkzeug.utils import secure_filename
from cloudinary_config import cloudinary
from controllers.image_upload_controller import upload_image
from controllers.auth_controller import signup, login
from controllers.prediction_controller import prediction_bp 
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes and origins
CORS(app)

# Register the blueprint
app.register_blueprint(prediction_bp, url_prefix='/api/predictions')

# Routes
@app.route('/signup', methods=['POST'])
def signup_route():
    return signup()

@app.route('/login', methods=['POST'])
def login_route():
    return login()
# Route for image upload
@app.route('/image-upload', methods=['POST'])
def upload():
    return upload_image()  # Call the function from the imageUploadController

if __name__ == '__main__':
    app.run(debug=True)