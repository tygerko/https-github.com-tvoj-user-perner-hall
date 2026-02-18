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
        title: 'Hlavní sál – Perner.Hall',
        rows: [
            { label: 'Divadlo', val: '300 osob' },
            { label: 'Škola', val: '161 osob' },
            { label: 'Koktejl', val: '81 osob' },
            { label: 'Gala', val: '240 osob' }
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
        title: 'Perner.Central',
        rows: [
            { label: 'Divadlo', val: '70 osob' },
            { label: 'Škola', val: '36 osob' }
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
        title: 'Perner.Klub',
        rows: [
            { label: 'Divadlo', val: '70 osob' },
            { label: 'Škola', val: '36 osob' }
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="6" y="8" width="24" height="20" rx="2" />
                <path d="M6 14h24M12 28v4M24 28v4" />
                <circle cx="18" cy="18" r="3" />
            </svg>
        ),
        title: 'Perner.Kino',
        rows: [
            { label: 'Kapacita', val: '15 osob' }
        ]
    }
];

const Capacities = () => {
    return (
        <section className="caps section-pad" id="caps">
            <div className="container">
                <div className="caps__header">
                    <div className="label">Kapacity & uspořádání</div>
                    <h2>MOŽNOSTI PROSTORŮ</h2>
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
