from flask import jsonify, request
import os
from werkzeug.utils import secure_filename
import cloudinary.uploader
from cloudinary_config import cloudinary

# Set up allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to upload image
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image part in the request"}), 400

    file = request.files['image']

    # If no file is selected
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Validate file type
    if file and allowed_file(file.filename):
        # Secure the filename and save it temporarily
        filename = secure_filename(file.filename)
        file_path = os.path.join('uploads', filename)

        # Save the file temporarily on the server
        file.save(file_path)

        try:
            # Upload image to Cloudinary
            upload_result = cloudinary.uploader.upload(file_path)
            image_url = upload_result['secure_url']  # Get the secure URL of the uploaded image

            # Clean up: Delete the temporary file from server after uploading to Cloudinary
            os.remove(file_path)

            return jsonify({
                "message": "Image uploaded successfully",
                "image_url": image_url
            }), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Invalid file type. Only images are allowed."}), 400
