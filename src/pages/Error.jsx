import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import { useNavigate } from 'react-router-dom';

function Error() {
  
  const {setError}= useContext(WeatherContext);
  const navigate = useNavigate();
  return (
    <div>
      <div>
           <button onClick={()=>setError(false)}>Home</button>
      </div>
      <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg" alt="ErrorImage" />
    </div>
  )
}

export default Error