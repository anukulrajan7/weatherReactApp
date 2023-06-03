import React from 'react'
import {IoSearchCircle} from 'react-icons/io5'
import WeatherContext from '../context/WeatherContext';
import { useContext } from 'react';
function Form() {
  const {handleChange,handleSearch} = useContext(WeatherContext);
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <form 
    className='w-[50%]
    flex items-center  mx-auto bg-purple-700 text-white  py-2    rounded-md shadow-md shadow-indigo-400 text-xl'
    onSubmit={handleSubmit}
    >
      <input type="text"
       className='w-[80%] text-start outline-none bg-transparent mx-2 px-2 captalize border-b-[3px] shadow-md  border-blue-300 placeholder:text-white capitalize '
      placeholder="Search" onChange={handleChange} />
      <button 
      className=' text-4xl text-purple-700 mx-auto  bg-white   rounded-full shadow-md shadow-blue-400'
      onClick={handleSearch}><IoSearchCircle className='w-full'/></button>
    </form>
  )
}

export default Form