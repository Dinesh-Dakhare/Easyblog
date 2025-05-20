# Blog Editor Application

## Overview

This project is a full-stack web application that allows users to create, edit, save, and publish blog posts. It includes a blog editor page with a title field, content field, and tags field, along with features like auto-save draft, and the ability to display, edit, and update blog posts.

## Tech Stack

* **Frontend:** React.js Tailwindcss dotenv
* **Backend:** Node.js with Express.js Mongoose
* **Database:** MongoDB
* **Other:** axios Toastity JWT Bcrypt cors express-validator react-router-dom
    * Mongoose for Schema Design
    * Express-validator for backend fields validation
    * react-rouer-dom for routing in frontend
    * bcrypt for password Encryption and Decryption
    * JWT token authentication for protected APIs

## Features

* **Blog Editor Page:**
    * Title field (text input)
    * Content field (rich text editor or textarea)
    * Tags field (optional, comma-separated)
* **Functionality:**
    * Save as Draft
    * Publish
    * Login Signup and Logout user
    * Display list of all blogs (published & drafts )
    * Edit and update existing drafts/posts
* **API Endpoints:**
*  ** USER Endpoints:**
    * `POST /api/v1/user/register`: Create User
    * `POST /api/v1/user/login`: Login  User
    * `GET /api/v1/user/logout`: Logout User
 * ** BLOG Endpoints:**
 *  `POST /api/v1/blog/createblog`: Create Blogs
 *  `POST /api/v1/blog/blogs`: Get All Authors Blogs
 *  `GET /api/v1/blog/blogs/:id`: Get Preview Of Blog 
 *  `DELETE /api/v1/blog/deleteblog/:id`: Delete Blogs
 *  

## System Architecture

[User (Browser)]|V[Frontend (React.js)] --- REST API Calls (HTTP) ---> [Backend (Express.js API Server)] ---> [Database (MongoDB)]
## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    "express": "^5.1.0",
    "express-validator": "^7.2.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.15.0",
    "nodemon": "^3.1.10",
    ```
3.  **Set up the MongoDB database:**
    * Ensure MongoDB is installed and running.
    * Create a `.env` file in the `backend` directory with the following variables:
        ```
        MONGODB_URI=<your_mongodb_connection_string>
        PORT=<your_desired_port>
        JWT_SECRET=<your_jwt_secret> // Only if you implement authentication
        ```
4.  **Run the backend server:**
    ```bash
    npm run start
    ```
5.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    "react": "^19.1.0",
    "tailwindcss": "^4.1.7",
    "react-toastify": "^11.0.5",
    "react-router-dom": "^7.6.0",
    "dotenv": "^16.5.0",
    "axios": "^1.9.0",
    ```
6.  **Configure the frontend:**
    * Create a `.env` file in the `frontend` directory with the following variable:
        ```
        VITE_BASE_URL=<your_backend_server_url>  // e.g., http://localhost:3000
        ```
7.  **Run the frontend application:**
    ```bash
    npm run dev
    ```
8.  **Access the application in your browser:**
    * Open your browser and go to the URL where the frontend application is running (e.g., `http://localhost:5173`).

## Database Schema

**Blog Schema**

| Field      | Type     | Description                               |
| :--------- | :------- | :---------------------------------------- |
| `_id`      | ObjectId | Unique identifier for the blog post       |
| `title`    | String   | Title of the blog post                    |
| `content`  | String   | Content of the blog post                  |
| `tags`     | [String] | Array of tags associated with the blog post |
| `status`   | String   | Status of the blog post ('draft' or 'published') |
| `createdAt`| Date     | Date and time the blog post was created    |
| `updatedAt`| Date     | Date and time the blog post was last updated |


