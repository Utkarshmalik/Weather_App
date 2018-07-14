import React from 'react';
import './CurrentWeather.css';
import Skycons from 'react-skycons'

const CurrentWeather = ({temp,status,wind,icon}) =>
{
  
    icon= icon.replace('-','_');
    icon= icon.replace('-','_');



  return(
    <div className="weather-box">
    <h1 className="Secondary-head"> The current weather update is...</h1>
    <div className="icon">
    <Skycons 
    className="icon" 
    color='#C33149'
    icon={icon.toUpperCase()}
    autoplay={true}
  />
  </div>
   <div className="status-box">
    <div className="box">
    <div className="param">Temprature</div>
    <span class="value-box">
    {temp} </span>
    </div>
    <div className="box">
    <div className="param">Status</div>
    <span className="value-box"> {status} </span>
    </div>
    <div className="box">
    <div className="param">Wind Speedd</div>
    <span className="value-box"> {wind} </span>
    </div>
    </div>
    </div>
  

  )

}


export default CurrentWeather;

