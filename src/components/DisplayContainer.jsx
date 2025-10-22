import React from 'react';

function DisplayContainer({ city, temperature, unit, fahrenheit, condition }) {
    return (
        <div className="display-container">
            <div className="display-wrap">
                <h2 className="city-name">{city}</h2>
                <div className="temperature">
                    <span className="celsius">{temperature} {unit}</span>
                    <span className="fahrenheit">/ {fahrenheit} °F</span>
                </div>
                <h3 className="weather-condition">{condition}</h3>
            </div>
        </div>
    );
}

export default DisplayContainer;