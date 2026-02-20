import React from 'react';
import './TrustBar.css';

const logos = [
    { src: '/assets/clients/visa.svg', alt: 'Visa', height: 28 },
    { src: '/assets/clients/bolt.svg', alt: 'Bolt', white: true, height: 36 },
    { src: '/assets/clients/ey.svg', alt: 'EY', height: 36 },
    { src: '/assets/clients/harley-davidson.svg', alt: 'Harley-Davidson', height: 19 },
    { src: '/assets/clients/rapid7.svg', alt: 'Rapid7', height: 23 },
    { src: '/assets/clients/rohlik.png', alt: 'Rohlik.cz', height: 62 },
    { src: '/assets/clients/generali.svg', alt: 'Generali' },
    { src: '/assets/clients/ocp-1.png', alt: 'OCP Oční centrum Praha', white: true, height: 80 },
    { src: '/assets/clients/nestle.svg', alt: 'Nestlé', white: true, height: 43 },
    { src: '/assets/clients/similarweb.png', alt: 'SimilarWeb', height: 44 },
    { src: '/assets/clients/strabag.svg', alt: 'Strabag', height: 44 },
    { src: '/assets/clients/hp.svg', alt: 'HP', white: true, height: 44 },
    { src: '/assets/clients/mastercard.svg', alt: 'Mastercard', height: 44 },
    { src: '/assets/clients/mzp.png', alt: 'Ministerstvo životního prostředí', white: true, height: 78 },
    { src: '/assets/clients/logo-2024-fr-zr-col-poz.png', alt: 'Firma roku / Živnostník roku', height: 60 },
    { src: '/assets/clients/havel-partners.svg', alt: 'Havel & Partners', white: true },
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
                                    className={`trust__logo-img${logo.white ? ' trust__logo-img--white' : logo.color ? ' trust__logo-img--color' : ''}`}
                                    style={logo.height ? { height: `${logo.height}px` } : undefined}
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
