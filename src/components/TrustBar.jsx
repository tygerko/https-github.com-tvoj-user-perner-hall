import React from 'react';
import './TrustBar.css';

const logos = [
    { src: '/assets/clients/visa-1-300x146.png.webp', alt: 'Visa' },
    { src: '/assets/clients/bolt-1-300x146.png.webp', alt: 'Bolt' },
    { src: '/assets/clients/ey-1-300x146.png.webp', alt: 'EY' },
    { src: '/assets/clients/hd-1-300x146.png.webp', alt: 'Havel & Partners' },
    { src: '/assets/clients/rapid-1-300x146.png.webp', alt: 'Rapid7' },
    { src: '/assets/clients/rohlik-1-300x146.png.webp', alt: 'Rohlik' },
    { src: '/assets/clients/ge-300x146.png.webp', alt: 'GE' },
    { src: '/assets/clients/ocp-1-300x146.png.webp', alt: 'OCP' },
    { src: '/assets/clients/nestle-1-300x146.png.webp', alt: 'Nestlé' },
    { src: '/assets/clients/similar-300x146.png.webp', alt: 'SimilarWeb' },
    { src: '/assets/clients/strabag-1-300x146.png.webp', alt: 'Strabag' },
    { src: '/assets/clients/hp-1-300x146.png.webp', alt: 'HP' },
    { src: '/assets/clients/mc-1-300x146.png.webp', alt: 'Mastercard' },
    { src: '/assets/clients/mzp-300x146.png.webp', alt: 'MZP' },
    { src: '/assets/clients/zr-300x146.png.webp', alt: 'ZR' },
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
                                    className="trust__logo-img"
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
