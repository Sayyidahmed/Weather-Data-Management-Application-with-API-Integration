import React, { useState } from 'react';

const WeatherForm = ({ onFetchWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) {
            alert('Please enter a valid city name.');
            return;
        }
        onFetchWeather(city);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', width:"90%" }}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ padding: '10px', marginRight: '10px',  width:"70%" }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px' }}>
                Fetch Weather
            </button>
        </form>
    );
};

export default WeatherForm;
