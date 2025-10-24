import React from 'react';
import '../styles/ButtonWrap.scss';

function ButtonWrap({ selectedCity, onCitySelect }) {
    const cities = [
        { id: 'current', name: '현재 위치' },
        { id: 'Hanoi', name: '하노이' },
        { id: 'Paris', name: '파리' },
        { id: 'New York', name: '뉴욕' },
        { id: 'Seoul', name: '서울' }
    ];

    return (
        <div className="btn-wrap">
            {cities.map(city => (
                <button
                    key={city.id}
                    className={`btn-city ${selectedCity === city.id ? 'active' : ''}`}
                    onClick={() => onCitySelect(city.id)}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default ButtonWrap;