import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import '../styles/DisplayContainer.scss';

function DisplayContainer({ weatherData, isLoading }) {
    // 로딩 중일 때 로딩 스피너 표시
    if (isLoading) {
        return (
            <div className="display-container">
                <div className="display-wrap">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    if (!weatherData) {
        return (
            <div className="display-container">
                <div className="display-wrap">
                    <p className='no-contents'>날씨 데이터가 없습니다</p>
                </div>
            </div>
        );
    }

    // 온도 변환 함수
    const celsiusToFahrenheit = (celsius) => {
        return Math.round((celsius * 9 / 5) + 32);
    };

    const temperature = Math.round(weatherData.main.temp);
    const fahrenheit = celsiusToFahrenheit(temperature);
    const cityName = weatherData.name;
    const condition = weatherData.weather[0].description;

    return (
        <div className="display-container">
            <div className="display-wrap">
                <h2 className="city-name">{cityName}</h2>
                <div className="temperature">
                    <span className="celsius">{temperature} °C</span>
                    <span className="fahrenheit">/ {fahrenheit} °F</span>
                </div>
                <p className="weather-condition">{condition}</p>
            </div>
        </div>
    );
}

export default DisplayContainer;