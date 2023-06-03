import React, { useEffect } from 'react';
import Form from '../components/Form';
import WeatherCard from '../components/WeatherCard';
import Spinner from '../components/Spinner';
import WeatherContext from "../context/WeatherContext";
import { useContext } from 'react';
import Error from '../pages/Error';
// import React from "react";
// import { Context } from "react";
function Home() {
  const { weatherInfo, loading, fetchWeather } = useContext(WeatherContext);
 const data = weatherInfo
 
 console.log(weatherInfo,loading)
  return (
    <div className='max-w-[1080px] mx-auto flex flex-col place-items-center gap-4 my-5 py-3 px-4'>
    <Form/>
    {
      weatherInfo === undefined ? <Spinner /> :
      <WeatherCard data={weatherInfo}/>
    }
    </div>
  );
}

export default Home;
