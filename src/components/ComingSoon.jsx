import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <div className="coming-soon__content">
                <h1 className="coming-soon__title">
                    PernerExperience
                    <span className="coming-soon__subtitle">Coming Soon</span>
                </h1>
                <p className="coming-soon__desc">
                    Ikonické eventové prostředí v srdci Karlína se připravuje na svůj velký návrat.
                </p>
                <div className="coming-soon__accent"></div>
            </div>
        </div>
    );
};

export default ComingSoon;
