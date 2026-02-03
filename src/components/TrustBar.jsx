import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    return (
        <section className="trust">
            <div className="container">
                <div className="trust__inner">
                    <span className="trust__label">Důvěřují nám</span>
                    <div className="trust__logos">
                        <span className="trust__logo--text">TOYOTA</span>
                        <span className="trust__logo--text">PORSCHE</span>
                        <span className="trust__logo--text">DELOITTE</span>
                        <span className="trust__logo--text">ALLIANZ</span>
                        <span className="trust__logo--text">SIEMENS</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
