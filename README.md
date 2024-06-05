## File_upload_cloud_integration_project

This project demonstrates how to handle file uploads for images and videos, compress images before uploading to Cloudinary, and send an email notification after a successful upload using Node.js, Express, Cloudinary, and Nodemailer.

## Features

- Upload files locally 
- Upload images and videos to Cloudinary
- Compress images before uploading
- Validate file types (JPEG, JPG, PNG, MP4 , MOV)
- File size limit foe video (5MB)
- Send email notification upon successful upload

## Prerequisites

- Node.js
- npm
- Cloudinary account
- Email account (e.g., Gmail) for sending notifications

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sanskarjhala/File_upload_cloud_integration_project.git
    cd file-upload-project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Cloudinary and email credentials:
    ```
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    EMAIL_HOST=smtp.example.com
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    MONGODB_URL=your_mongo_database_url
    ```
4. Download all neccesary pakages 