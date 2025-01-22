# Weather-Data-Management-Application-with-API-Integration
# Project Setup Instructions:
This guide will walk you through setting up the frontend (React) and backend (Laravel with MySQL database) for Weather-Data-Management-Application.

# Prerequisites:
Ensure the following are installed on your system:

1. Git: Make sure you have Git installed to clone the repository.
2. Node.js & npm: Required for frontend dependencies.
3. PHP: Required to run the Laravel backend.
4. Composer: Required for managing Laravel PHP dependencies.
5. MySQL: For setting up the database.

# Backend Setup (Laravel with MySQL):
1. Clone the Backend Repository:
      git clone https://github.com/Sayyidahmed/Project-Management-App.git
     cd weather-api
2. Install Laravel Dependencies: Run the following command in the backend directory to install Laravel dependencies:
    composer install
3. Set Up Environment File:
  Copy the .env.example file to .env:
4. Open .env and configure your database connection and make the following changes: 
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=weatherdb
    DB_USERNAME=root
    DB_PASSWORD=
6. API Key Configuration: Add your OpenWeatherMap API key
7. Generate Application Key: Generate the Laravel application key using the following command:
  php artisan key:generate
8. Set Up Database: CREATE DATABASE project
9. create model, database migration, controller using the following command:
   php artisan make:model project -a --api
   update the migration coloumns as you needed in the database
10. Start the Backend Server: Start the Laravel development server:
    php artisan serve
    The backend server will run at http://127.0.0.1:8000.


  # Frontend Setup (React)
  1. Clone the Frontend Repository:
    git clone https://github.com/Sayyidahmed/Weather-Data-Management-Application-with-API-Integration

  2. Install Frontend Dependencies: Run the following command in the frontend directory to install Node.js dependencies:

    npm install
    Configure API Endpoint:

  3. Locate the axios API call setup in your React project.
    Update the base URL to match your Laravel backend URL and make sure it looks like this code in vite.config.js:
                export default defineConfig({
              plugins: [react()],
              server:{
                proxy:{
                  "/api":{
                    target:"http://127.0.0.1:8000/",
                    changeOrigin:true,
                    headers:{
                      Accept:"application/json",
                      'Content-Type':"application/json"
                    }
                  }
                }
              }
            })


  4. Start the Frontend Server: Start the React development server:

    npm run dev
    The frontend server will run at http://localhost:5173.

  5. Testing the Application
    Access the React App: Open http://localhost:5173 in your browser to use the frontend.
    
    Verify API Requests: The React app will communicate with the Laravel backend through /api endpoints. Ensure that your Laravel backend is running and accessible.
