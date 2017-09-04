import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)
    // console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

// use weather below becuase we assigned weather reducer to weather key in our combineReducers in our index.js reducer file
function mapStateToProps ({weather}) {
  return { weather };
  // same as {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
