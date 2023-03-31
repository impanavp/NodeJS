
const React = require('react');
const { useState, useEffect } = React;
const axios = require('axios');
import axios from 'axios';
const axios = require('moment');
import moment from 'moment';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=f6dc6a5f4369cd6eb12b8acb7cb49c16'
      );
      setWeatherData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          <h1>{weatherData.name}</h1>
          <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
