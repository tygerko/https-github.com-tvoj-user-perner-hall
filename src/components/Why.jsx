import React from 'react';
import './Why.css';

const whyData = [
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="4" y="6" width="28" height="22" rx="1" />
                <path d="M4 12h28" />
                <path d="M12 6V4M24 6V4" />
            </svg>
        ),
        title: 'Multifunkční Perner Hall',
        desc: 'Kapacita až 300 osob v divatelním uspořádání – hlavní sál pro konference, prezentace i gala.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="18" cy="18" r="12" />
                <path d="M18 6v12l7 4" />
            </svg>
        ),
        title: 'Propojitelný komplex',
        desc: 'Experience event floor pro až 700 osob: socialize zone, kino, klub, Balance room a zahrada.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M18 4c-6 0-11 5-11 11 0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11z" />
                <circle cx="18" cy="15" r="3" />
            </svg>
        ),
        title: 'Privátní zahrada',
        desc: 'Rozlehlý venkovní prostor v centru Karlína – ideální pro networking, catering nebo večerní party.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="6" y="8" width="24" height="16" rx="1" />
                <path d="M6 18h24M14 8v16" />
                <circle cx="11" cy="13" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
        title: 'Špičkové technické zázemí',
        desc: 'Multi-projekce, adaptivní světelná konfigurace, 360° AI kamera, digital signage a branding prostory.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 28V12l10-6 10 6v16" />
                <path d="M8 12l10 6 10-6" />
                <path d="M18 18v10" />
            </svg>
        ),
        title: 'Full-service event management',
        desc: 'Kompletní organizace, catering a produkce eventu od prvního briefu po poslední detail.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 30V10l12-4 12 4v20" />
                <rect x="13" y="18" width="10" height="12" />
                <path d="M6 10l12-4 12 4" />
                <circle cx="18" cy="8" r="2" />
            </svg>
        ),
        title: 'Green certifikace',
        desc: 'Budova splňuje BREEAM / LEED standardy – udržitelnost a ekologická zodpovědnost na prvním místě.'
    }
];

const Why = () => {
    return (
        <section className="why section-pad" id="why">
            <div className="container">
                <div className="why__header">
                    <div className="label">Proč Perner Karlín</div>
                    <h2>Komplex pro nezapomenutatelné eventy</h2>
                </div>
                <div className="why__grid">
                    {whyData.map((item, index) => (
                        <div key={index} className="why__card">
                            <div className="why__icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
