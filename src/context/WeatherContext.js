import { createContext, useState } from "react";

const  WeatherContext = createContext()
export const WeatherContextProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [formField, setFormField] = useState("");
  const [error, setError] = useState(false);
 

  //  Handle Change
  const handleChange = (e) => {
    setFormField(e.target.value);
  };
  // Handle Search
  const handleSearch = () => {
    fetchWeather(formField);
  };
  // Fetch Weather
  const fetchWeather = async (city="landon") => {
    setLoading(true);
    console.log(city)
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='+city+'&days=3';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '53a4e1b50amshad4530dff551dfep13e4c5jsn4b6995edcf14',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if(result.error){
        setError(true);
        setLoading(false)
      }else{
        console.log(result)
        setWeatherInfo(result)
        setLoading(false)
      }
    
        
    } catch (error) {
      setError(true);
      console.log(error);
    }
    
  };
  let value = {
    weatherInfo,
    loading,
    formField,
    handleChange,
    handleSearch,
    fetchWeather,
    setError,
    error
  }

return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
};
export default WeatherContext;
