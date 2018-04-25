import React from "react" // import React specified in package.json
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "9861185ad1f543a0117d43563f4bfbe1"

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined 
  }
  getWeather = async (e) => {
    e.preventDefault();
    // get values of the form from Form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // call to api
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json(); // convert to JSON format
    if (city && country)
    {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value"
      });
    }  
  } // arrow => binds this to component with no constructor
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row"></div>
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App; // this is so index.js can see the app