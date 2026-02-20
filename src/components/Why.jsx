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
        // conference / stage icon
        titleIcon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="why__title-icon">
                <rect x="2" y="4" width="16" height="10" rx="1"/>
                <path d="M6 14v2M14 14v2M4 16h12"/>
                <circle cx="10" cy="9" r="2"/>
            </svg>
        ),
        title: 'Multifunkční Perner.Experience',
        desc: 'Kapacita až 300 osob v divadelním uspořádání – hlavní sál pro konference, prezentace i gala.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="18" cy="18" r="12" />
                <path d="M18 6v24M6 18h24" />
                <circle cx="18" cy="18" r="4" />
            </svg>
        ),
        // connected / link icon
        titleIcon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="why__title-icon">
                <path d="M8 10a4 4 0 0 0 4 4l2-2a2.83 2.83 0 0 1-4-4L8 10z"/>
                <path d="M12 10a4 4 0 0 0-4-4L6 8a2.83 2.83 0 0 1 4 4L12 10z"/>
                <path d="M3 17l4-4M13 7l4-4"/>
            </svg>
        ),
        title: 'Propojitelný komplex',
        desc: 'Perner.Hall, Perner.Central, Perner.Klub a Perner.Kino.'
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M18 4c-6 0-11 5-11 11 0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11z" />
                <circle cx="18" cy="15" r="3" />
            </svg>
        ),
        // garden / leaf icon
        titleIcon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="why__title-icon">
                <path d="M10 18c0 0-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11z"/>
                <path d="M10 7v11"/>
                <path d="M7 10c1-1 3-1 3 0"/>
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
        // AV / tech icon
        titleIcon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="why__title-icon">
                <polygon points="5,3 19,10 5,17"/>
                <line x1="1" y1="5" x2="1" y2="15"/>
                <line x1="3" y1="7" x2="3" y2="13"/>
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
        // handshake / service icon
        titleIcon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="why__title-icon">
                <path d="M2 12l3-3 3 3 3-3 3 3 3-3"/>
                <path d="M4 16h12"/>
                <path d="M7 6h6"/>
                <path d="M10 4v4"/>
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
        // leaf / sustainability icon
        titleIcon: (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="why__title-icon">
                <path d="M17 3s-8 0-11 7c-1 2-1 5 2 7"/>
                <path d="M3 17l5-5"/>
                <path d="M9 9c2-1 5-2 8-6"/>
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
                            <h3>
                                {item.titleIcon}
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
