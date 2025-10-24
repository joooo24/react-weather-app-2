import React, { useState, useEffect } from 'react';
import DisplayContainer from './components/DisplayContainer';
import ButtonWrap from './components/ButtonWrap';
import './styles/App.scss';

function App() {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [weatherData, setWeatherData] = useState(null);

    // 1. 현재 위치 가져오기 함수
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("쭈 position", position)
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    // 2. 현재 위치로 날씨 가져오기 함수
    const getWeatherByCurrentLocation = async (lat, lon) => {
        const response = await fetch(
            `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        let data = await response.json();
        setWeatherData(data);
    };

    // 3. 도시명으로 날씨 가져오기 함수
    const getWeatherByCity = async (cityName) => {
        const response = await fetch(
            `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        let data = await response.json();
        setWeatherData(data);
    };

    // 4. 도시 선택 핸들러 함수
    const selectCity = (cityId) => {
        if (cityId === 'current') {
            getCurrentLocation();
        } else {
            getWeatherByCity(cityId);
        }
    };

    // 컴포넌트 마운트 시 현재 위치 날씨 로드
    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div className="app">
            <DisplayContainer weatherData={weatherData} />
            <ButtonWrap onCitySelect={selectCity} />
        </div>
    );
}

export default App;