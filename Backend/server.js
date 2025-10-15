import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import app from './app.js'; // Imports the express app from app.js

// Configure dotenv to find the config.env file
dotenv.config({ path: './config/config.env' });

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

mongoose.connect(process.env.MONGO_URI, {
    dbName: "Hospital-Management" // Or whatever you named your database
}).then(() => {
    console.log("Connected to Database!");

    // Start the server only after the database connection is successful
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
    });

}).catch(err => {
    console.log(`Some error occurred while connecting to Database: ${err}`);
});