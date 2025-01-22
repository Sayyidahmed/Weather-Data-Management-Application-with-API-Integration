import React from 'react';

const WeatherTable = ({ weatherData }) => {
    if (!weatherData) {
        return <p>No weather data available.</p>;
    }

    return (
        <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }} className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (°C)</th>
                    <th>Description</th>
                    <th>Retrieved At</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{weatherData.city}</td>
                    <td>{weatherData.temperature}</td>
                    <td>{weatherData.description}</td>
                    <td>{new Date(weatherData.retrieved_at).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default WeatherTable;
