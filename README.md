# SHCMS Project

## Description
This is the **Autonomous ECU Update Management System** for managing and monitoring vehicle ECU updates. The project includes both a frontend and backend, which must be set up separately.

## Folder Structure
- `Frontend/`: Contains the React app for the user interface.
- `Backend/`: Contains the Node.js server and API.
- `Database/`: SQL database scripts for the project.

## Prerequisites
To run this project, you need the following installed:
- **Node.js** (v14 or later)
- **npm** (comes with Node.js)
- **SQL Database** (e.g., MySQL or PostgreSQL)

## Setup Instructions

### 1. Clone the Repository
First, clone the project to your local machine:
```bash
git clone https://github.com/Suhas-30/SHCMS.git
```

### 2. Set Up the Frontend
Navigate to the `Frontend` directory and install the dependencies:
```bash
cd Frontend
npm create vite@latest
npm i axios
```

### 3. Configure `vite.config.js` for Frontend-Backend Communication
To connect the frontend to the backend using Axios and CORS, ensure that `vite.config.js` in your `Frontend/` folder contains the following configuration:

```js
// vite.config.js
export default {
  server: {
    proxy: {
      '/previous-owner-form': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
```

This proxy setting allows the frontend to send requests to the backend running on `http://localhost:3000` without encountering CORS issues.

To run the frontend (React app) in development mode:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

### 4. Set Up the Backend
Navigate to the `Backend` directory and install the dependencies:
```bash
cd Backend
npm install express, mysql2, dotenv, cros
```

### 5. Configure the `.env` File for Database Connection
The backend uses a `.env` file for environment variables, including database connection details. Create a `.env` file in the `Backend/` directory and add the following variables:

```bash
# .env
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
PORT=3000
```

Ensure these credentials match your local database setup. The backend will connect to the SQL database using these values.

### 6. Axios Integration in Frontend
Axios is used to send HTTP requests from the frontend to the backend. In your `Frontend` React components, you can use Axios like this:

```js
import axios from 'axios';

axios.post('/previous-owner-form', {
//   name: 'John Doe',
//   email: 'john@example.com',
  // other data
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error('There was an error!', error);
});
```

Axios will use the proxy setup in `vite.config.js` to send requests to `http://localhost:3000/previous-owner-form`.

### 7. Set Up the Database
You need to create and configure the database using the SQL scripts provided in the `Database` folder. After creating the database, ensure the credentials in your `.env` file match the database configuration.

### 8. Run the Backend Server
To start the backend server, run the following command from the `Backend/` directory:
```bash
node index.js
```

The backend API will be available at `http://localhost:3000`.

### 9. Run the Application
Once both the frontend and backend are set up, the application should work as follows:
- Visit the frontend at `http://localhost:5173`.
- The frontend will interact with the backend API available at `http://localhost:3000`.

## Contributing
If you want to contribute to the project, create a new branch, make your changes, and submit a pull request.

---

This README file now includes detailed instructions for setting up the project, using the `.env` file for database connections, configuring Axios, and adding proxy settings in `vite.config.js`.