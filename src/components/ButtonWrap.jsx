import React from 'react';
import '../styles/ButtonWrap.scss';

function ButtonWrap({ selectedCity = "current" }) {
    const cities = [
        { id: 'current', name: '현재 위치' },
        { id: 'hanoi', name: '하노이' },
        { id: 'paris', name: '파리' },
        { id: 'new-york', name: '뉴욕' },
        { id: 'seoul', name: '서울' }
    ];

    return (
        <div className="btn-wrap">
            {cities.map(city => (
                <button
                    key={city.id}
                    className={`btn-city ${selectedCity === city.id ? 'active' : ''}`}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default ButtonWrap;