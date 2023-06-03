import Footer from "./components/Footer"
import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";
import { useEffect,useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import Spinner from "./components/Spinner";


function App() {
  const {loading,fetchWeather,error}=useContext(WeatherContext);
  useEffect(() => {
    fetchWeather();
  },[]);
  return (
    <div className="bg-white min-h-screen  W-[100vw] overflow-x-hidden  overflow-y-hidden">
      <Header />

{loading? <Spinner /> : 
     (error ? <Error /> :<Home />)
     }  
     

     
      <Footer />
    </div>
  );
}

export default App;
