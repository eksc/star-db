import React from 'react'

import './error-indicator.css'
import icon from './error-indicator.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" width="64" height="64"/>
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we alredy send droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;