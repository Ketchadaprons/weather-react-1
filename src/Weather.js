import React from "react";

import "./Weather.css";

export default function Weather(props) {
  let weather = {
    city: "Chicago",
    texperature: 24,
    date: "Monday 11:09",
    description: "Windy",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
    humidity: 55,
    wind: 2,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="search-form mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control shadow-sm"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1>{weather.city}</h1>
              <ul>
                <li>{weather.date}</li>
                <li>{weather.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src={weather.imgUrl} alt="Clear" />
                  <div>
                    <strong>{weather.texperature}</strong>
                    <span className="units"> ℉</span>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span>{weather.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weather.wind}</span>mph
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <small>
            <a
              href="https://github.com/Ketchadaprons/weather-react-1"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Ketchadapron
          </small>
        </div>
      </div>
    </div>
  );
}
