import React from 'react';
import './Capacities.css';

const capsData = [
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="6" y="10" width="24" height="16" rx="1" />
                <path d="M6 18h24" />
                <path d="M18 10v16" />
                <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="24" cy="22" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
        title: 'Hlavní sál – PernerHall',
        rows: [
            { label: 'Divadlo (theater)', val: 'až 300 osob' },
            { label: 'Školní uspořádání', val: 'až 150 osob' },
            { label: 'Cocktail / standing', val: 'až 500 osob' },
            { label: 'Stropní výška', val: '4.2 m' }
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="18" cy="18" r="12" />
                <path d="M18 6v24M6 18h24" />
                <circle cx="18" cy="18" r="4" />
            </svg>
        ),
        title: 'PernerExperience eventové patro',
        rows: [
            { label: 'Celková kapacita', val: 'až 700 osob' },
            { label: 'Paralelní programy', val: '✓' },
            { label: 'Networking zóny', val: '✓' },
            { label: 'VIP Lounge', val: '✓' }
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 28V14l10-7 10 7v14" />
                <path d="M8 14l10 6 10-6" />
                <rect x="14" y="20" width="8" height="8" />
                <path d="M6 28h24" />
            </svg>
        ),
        title: 'Privátní zahrada',
        rows: [
            { label: 'Standing / party', val: 'až 200 osob' },
            { label: 'Catering zázemí', val: '✓' },
            { label: 'Evening events', val: '✓' },
            { label: 'Privátní přístup', val: '✓' }
        ]
    }
];

const Capacities = () => {
    return (
        <section className="caps section-pad" id="caps">
            <div className="container">
                <div className="caps__header">
                    <div className="label">Kapacity & uspořádání</div>
                    <h2>možnosti pronájmu/prostorů</h2>
                </div>
                <div className="caps__grid">
                    {capsData.map((section, idx) => (
                        <div key={idx} className="caps__card">
                            <div className="caps__icon">{section.icon}</div>
                            <div className="caps__card-title">{section.title}</div>
                            {section.rows.map((row, rIdx) => (
                                <div key={rIdx} className="caps__row">
                                    <span className="caps__row-label">{row.label}</span>
                                    <span className="caps__row-val">{row.val}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capacities;
