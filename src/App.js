import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentWeather from './CurrentWeather';
import Buttons from './Buttons';

console.log("Hello");


class App extends Component {

  constructor()
  {
    super();

    this.state={
      temp:"Loading...",
      status:"Loading...",
      wind:"Loading...",
      icon:"Loading"
    }
  
  }

  componentDidMount()
  {

    console.log("Hello");
    
    //find the latitude and the longitude of the current location

    let Latitude;
    let Longitude;

    const getValues=(position)=>{
      Latitude=position.coords.latitude; 
      Longitude=position.coords.longitude;

      console.log(Latitude);
      console.log(Longitude);
      
      fetch(`https://api.darksky.net/forecast/4f5b9ef60b13d0f4b581f59e51881e71/${Latitude},${Longitude}`)
      .then(response => response.json())
      .then(data=>{this.setState({temp:data.currently.temperature ,status:data.currently.summary,wind:data.currently.windSpeed, icon:data.currently.icon} )     })
    }
     
     const getLocation=()=> {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getValues);
        } 
    }
    
    getLocation();
  }







  render() {
    return (
      <div className="App">
      <h1 className="primary-head"> Insti-Weather App</h1>
      <CurrentWeather temp={this.state.temp} status={this.state.status} wind={this.state.wind} icon={this.state.icon} />
      </div>
    );
  }
}

export default App;


