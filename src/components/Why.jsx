import React from 'react';
import './Why.css';

const whyData = [
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="6" width="32" height="20" rx="1" />
                <path d="M10 26v3M26 26v3M6 29h24" />
                <circle cx="18" cy="16" r="4" />
                <path d="M2 12h32" />
            </svg>
        ),
        title: 'Multifunkční Perner.Experience',
        desc: 'Kapacita až 300 osob v divadelním uspořádání – hlavní sál pro konference, prezentace i gala.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="12" width="10" height="16" rx="1" />
                <rect x="13" y="8" width="10" height="20" rx="1" />
                <rect x="24" y="14" width="10" height="14" rx="1" />
                <path d="M2 28h32" />
            </svg>
        ),
        title: 'Propojitelný komplex',
        desc: 'Perner.Hall, Perner.Central, Perner.Klub a Perner.Kino.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* strom lavy */}
                <path d="M7 28v-8" />
                <circle cx="7" cy="16" r="5" />
                {/* strom pravy */}
                <path d="M27 28v-9" />
                <circle cx="27" cy="15" r="6" />
                {/* lavicka */}
                <path d="M13 26h10" />
                <path d="M14 26v2M22 26v2" />
                <path d="M12 24h12" />
                {/* lampa */}
                <path d="M19 22v-8" />
                <path d="M19 14l3-2" />
                <path d="M22 12v3l-3 0" />
                {/* zem */}
                <path d="M2 30h32" />
            </svg>
        ),
        title: 'Privátní zahrada',
        desc: 'Rozlehlý venkovní prostor v centru Karlína – ideální pro networking, catering nebo večerní party.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polygon points="8,4 28,18 8,32" />
                <line x1="2" y1="6" x2="2" y2="30" />
                <line x1="5" y1="9" x2="5" y2="27" />
            </svg>
        ),
        title: 'Špičkové technické zázemí',
        desc: 'Multi-projekce, adaptivní světelná konfigurace, 360° AI kamera, digital signage a branding prostory.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="6" y="4" width="24" height="28" rx="1" />
                <path d="M11 11h14" />
                <path d="M11 16h14" />
                <path d="M11 21h10" />
                <circle cx="8.5" cy="11" r="1" fill="currentColor" stroke="none" />
                <circle cx="8.5" cy="16" r="1" fill="currentColor" stroke="none" />
                <circle cx="8.5" cy="21" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
        title: 'Full-service event management',
        desc: 'Kompletní organizace, catering a produkce eventu od prvního briefu po poslední detail.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M18 30V16" />
                <path d="M18 16c-1-5-7-8-12-6 1 6 6 10 12 10z" />
                <path d="M18 20c1-4 6-7 11-5-1 5-5 8-11 8z" />
                <path d="M10 30h16" />
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
                    <div className="label">VYJÍMEČNÁ LOKALITA – ŠPIČKOVÁ TECHNOLOGIE – JEDINEČNÁ ATMOSFÉRA</div>
                    <h2>PROSTOR PRO NEZAPOMENUTELNÉ EVENTY</h2>
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
