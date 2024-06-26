# Weather App

## Project Description
The **Weather App** is a full-stack application designed to retrieve and display weather information for any city. The app provides a 5-day weather forecast by leveraging the WeatherAPI. The application is built with React for the frontend and Node.js with Express.js for the backend.

## Features
- Retrieve and display a 5-day weather forecast for any city.
- Responsive and intuitive user interface with React and React-Bootstrap.
- Secure and efficient backend to handle API requests using Node.js and Express.js.

## Technologies Used
### Front-End
- **React**: A JavaScript library for building user interfaces.
- **React-Bootstrap**: Integration of Bootstrap with React components.
- **Axios**: A promise-based HTTP client for making API requests.
- **Bootstrap**: A CSS framework for responsive design.

### Back-End
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js.
- **Axios**: Used for making HTTP requests to the WeatherAPI.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Body-Parser**: Middleware for parsing incoming request bodies.

### API
- **WeatherAPI**: Provides weather data including current conditions, forecasts, and historical data.

## Prerequisites
- **Node.js** : Ensure Node.js is installed on your machine. Download it from Node.js official website.

## Installation

To run the app locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/WeatherApp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd WeatherApp
    ```
3. Navigate to the front end:
   ```bash
    cd weather-frontend
    npm install
    npm start 
    ```
4. Open a new terminal, navigate to the back end:
   ```bash
    cd ./WeatherApp/weather-backend
    npm install
    node server.js 
    ```
5. Run the application on the local host `http://localhost:3000`. Enter the city you want to look for the weather, then it forecast thie city's weather in 5 days
