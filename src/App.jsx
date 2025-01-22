import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/weatherForm';
import WeatherTable from './components/WeatherTable';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.post('http://localhost:8000/api/weather', { city });
            setWeatherData(response.data);
        } catch (error) {
            alert('Invalid city name. Please try again.');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' , border:"1px solid #ddd", width:"800px", margin:"auto"}}>
            <h1>Weather App</h1>
            <WeatherForm onFetchWeather={fetchWeather} />
            <WeatherTable weatherData={weatherData} />
        </div>
    );
};

export default App;
