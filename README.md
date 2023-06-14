# Paperless Blog App - Backend Repository

Welcome to the Paperless Blog App! This repository contains the backend code for a blog application developed using Node.js and MongoDB. The Paperless Blog App aims to provide a seamless experience for bloggers to create, read, update, and delete blog posts.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Register and login to the blog app securely.
- Create and manage blog posts: Write, edit, and delete blog posts.
- Commenting system: Engage with other users through comments on blog posts.
- User profiles: View and update user profiles with personal information and profile pictures.
- Search functionality: Search for blog posts based on specific keywords or tags.
- Pagination: Browse through blog posts with a paginated view.

## Prerequisites

Before setting up the Paperless Blog App backend, ensure you have the following prerequisites installed:

- Node.js (version >= 12.0.0)
- MongoDB (version >= 4.0.0)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abbesdev/paperless-backend.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd paperless-backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Provide the required environment variables in the `.env` file:

   ```plaintext
   PORT=3000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

   - `PORT`: The port on which the server will run (default is 3000).
   - `MONGODB_URI`: The connection string for your MongoDB database.
   - `JWT_SECRET`: A secret key used for signing JSON Web Tokens.

## Usage

To start the Paperless Blog App backend server, run the following command:

```bash
npm start
```

The server will start running at the specified port, and you can now connect to it using the defined API endpoints.

## API Endpoints

The Paperless Blog App backend provides the following API endpoints:

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate and log in a user.
- `GET /api/auth/me`: Get the authenticated user's information.
- `PUT /api/auth/me`: Update the authenticated user's information.
- `PUT /api/auth/me/avatar`: Update the authenticated user's profile picture.
- `GET /api/posts`: Get a paginated list of blog posts.
- `GET /api/posts/:postId`: Get a specific blog post by ID.
- `POST /api/posts`: Create a new blog post.
- `PUT /api/posts/:postId`: Update a specific blog post by ID.
- `DELETE /api/posts/:postId`: Delete a specific blog post by ID.
- `POST /api/posts/:postId/comments`: Add a comment to a specific blog post.
- `DELETE /api/posts/:postId/comments/:commentId`: Delete a comment from a specific blog post.

Refer to the API documentation or the source code for more details on request and response formats.

## Contributing

Contributions to the Paperless Blog App backend are always welcome! If you have any suggestions, bug reports,

 or feature requests, please open an issue on this repository.

If you'd like to contribute code, please fork the repository, create a new branch, make your changes, and submit a pull request. Ensure your code follows the project's code style guidelines and includes appropriate tests.

## License

No license mentionned.