import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherNow from './components/WeatherNow.js';
import Header from './components/Header.js';
import IsSafe from './components/IsSafe.js';
import { Box } from '@mui/material';

function App() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/external-data');
          setWeather(result.data);
          setLoading(false);
      } catch(error) {
          console.error("Error in fetching data", error);
      } finally {
          setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading weather data...</p>
  }

  return (
    <>
    <Box
      sx={{
        padding: {xs: 2, sm: 4, md: 6},
        width:{xs: '100%', sm: '80%', md: '60%'},
        mx: 'auto',
        textAlign: 'center'
      }}
    >
      <Header></Header>
      <br></br>
      <WeatherNow weather= {weather} loading= {loading}></WeatherNow>
      <br></br>
      <IsSafe weather= {weather}></IsSafe>
    </Box>
    </>
  );
}

export default App;
