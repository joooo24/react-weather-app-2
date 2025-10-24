import React from 'react';
import '../styles/LoadingSpinner.scss';

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
        </div>
    );
}

export default LoadingSpinner;
