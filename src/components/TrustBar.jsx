import React from 'react';
import './TrustBar.css';

const logos = [
    { src: '/assets/clients/visa-1.png', alt: 'Visa' },
    { src: '/assets/clients/bolt-1.png', alt: 'Bolt', white: true },
    { src: '/assets/clients/ey-1.png', alt: 'EY' },
    { src: '/assets/clients/hd-1.png', alt: 'Havel & Partners' },
    { src: '/assets/clients/rapid-1.png', alt: 'Rapid7' },
    { src: '/assets/clients/rohlik-1.png', alt: 'Rohlik' },
    { src: '/assets/clients/ge.png', alt: 'GE' },
    { src: '/assets/clients/ocp-1.png', alt: 'OCP' },
    { src: '/assets/clients/nestle-1.png', alt: 'Nestlé' },
    { src: '/assets/clients/similar.png', alt: 'SimilarWeb' },
    { src: '/assets/clients/strabag-1.png', alt: 'Strabag' },
    { src: '/assets/clients/hp-1.png', alt: 'HP' },
    { src: '/assets/clients/mc-1.png', alt: 'Mastercard' },
    { src: '/assets/clients/mzp.png', alt: 'MZP' },
    { src: '/assets/clients/zr.png', alt: 'ZR' },
];

const TrustBar = () => {
    return (
        <section className="trust">
            <div className="container">
                <div className="trust__inner">
                    <span className="trust__label">Důvěřují nám</span>
                    <div className="trust__logos">
                        <div className="trust__logos-track">
                            {[...logos, ...logos].map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`trust__logo-img${logo.white ? ' trust__logo-img--white' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
