# SHCMS Project

## Description
This is the **Second Hand Car Management System**. The project includes both a frontend and backend, which must be set up separately.

## Folder Structure
```
SHCMS/
├── Frontend/       # Contains the React app for the user interface.
├── Backend/        # Contains the Node.js server and API.
└── Database/       # SQL database scripts for the project.
```

## Prerequisites
To run this project, you need the following installed:
- **Node.js** (v14 or later)
- **npm** (comes with Node.js)
- **SQL Database** (MySQL)

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
npm install axios
```

### 3. Run the Frontend 
To run the frontend (React app) in development mode:
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`.

### 4. Set Up the Backend
Navigate to the `Backend` directory and install the dependencies:
```bash
cd ../Backend
npm install express mysql2 dotenv cors multer
create folder "uploads" manually 
```

### 5. Configure the `.env` File for Database Connection
The backend uses a `.env` file for environment variables, including database connection details. Create a `.env` file in the `Backend/` directory and add the following variables:
```plaintext
# .env
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
PORT=3000
```
Ensure these credentials match your local database setup. The backend will connect to the SQL database using these values.

### 6. Set Up the Database
You need to create and configure the database using the SQL scripts provided in the `Database` folder. After creating the database, ensure the credentials in your `.env` file match the database configuration.

### 7. Run the Backend Server
To start the backend server, run the following command from the `Backend/` directory:
```bash
node index.js
```
The backend API will be available at `http://localhost:3000`.

### 8. Run the Application
Once both the frontend and backend are set up, the application should work as follows:
- Visit the frontend at `http://localhost:5173`.
- The frontend will interact with the backend API available at `http://localhost:3000`.

### 9. Admin Credentials 
username-admin 
password-admin@123

## Contributing
If you want to contribute to the project, create a new branch, make your changes, and submit a pull request.

---

### Additional Notes
- Ensure you replace `your-database-host`, `your-database-username`, `your-database-password`, and `your-database-name` in the `.env` file with your actual database configuration.
- Make sure to configure Axios in your React app for API requests if necessary.

This format enhances readability and clarity, making it easier for users to follow the setup instructions. Let me know if you need any further modifications!
