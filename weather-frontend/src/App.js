import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const response = await axios.get(`http://localhost:5000/weather/${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <div className="App container">
      <h1 className="my-4 text-center">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
