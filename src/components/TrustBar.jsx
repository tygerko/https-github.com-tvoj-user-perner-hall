import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    return (
        <section className="trust">
            <div className="container">
                <div className="trust__inner">
                    <span className="trust__label">Důvěřují nám</span>
                    <div className="trust__logos">
                        <div className="trust__logos-track">
                            <span className="trust__logo--text">VISA</span>
                            <span className="trust__logo--text">BOLT</span>
                            <span className="trust__logo--text">EY</span>
                            <span className="trust__logo--text">HAVEL & PARTNERS</span>
                            <span className="trust__logo--text">RAPID 7</span>
                            <span className="trust__logo--text">ROHLIK</span>
                            <span className="trust__logo--text">GENERALI</span>
                            {/* Duplicate for infinite effect */}
                            <span className="trust__logo--text">VISA</span>
                            <span className="trust__logo--text">BOLT</span>
                            <span className="trust__logo--text">EY</span>
                            <span className="trust__logo--text">HAVEL & PARTNERS</span>
                            <span className="trust__logo--text">RAPID 7</span>
                            <span className="trust__logo--text">ROHLIK</span>
                            <span className="trust__logo--text">GENERALI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
