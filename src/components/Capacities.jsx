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
        title: 'Perner.Hall – Hlavní sál',
        rows: [
            { label: 'Divadlo', val: '300 osob' },
            { label: 'Škola', val: '161 osob' },
            { label: 'Koktejl', val: '240 osob' },
            { label: 'Gala', val: '81 osob' }
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* stlpy / portikus */}
                <path d="M4 30h28" />
                <path d="M4 12h28" />
                <rect x="4" y="8" width="28" height="4" rx="0.5" />
                <line x1="8" y1="12" x2="8" y2="30" />
                <line x1="14" y1="12" x2="14" y2="30" />
                <line x1="22" y1="12" x2="22" y2="30" />
                <line x1="28" y1="12" x2="28" y2="30" />
                <path d="M18 4l14 4H4l14-4z" />
            </svg>
        ),
        title: 'Perner.Central',
        rows: [
            { label: 'Divadlo', val: '70 osob' },
            { label: 'Škola', val: '36 osob' },
            { label: 'Koktejl', val: '240 osob' }
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* 3 postavicky vedla seba */}
                <circle cx="10" cy="10" r="3" />
                <path d="M5 24v-5a5 3 0 0 1 10 0v5" />
                <circle cx="18" cy="9" r="3" />
                <path d="M13 24v-6a5 3 0 0 1 10 0v6" />
                <circle cx="26" cy="10" r="3" />
                <path d="M21 24v-5a5 3 0 0 1 10 0v5" />
                <path d="M2 28h32" />
            </svg>
        ),
        title: 'Perner.Klub',
        rows: [
            { label: 'Divadlo', val: '70 osob' },
            { label: 'Škola', val: '36 osob' },
            { label: 'Koktejl', val: '240 osob' }
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* play button v kruhu */}
                <circle cx="18" cy="18" r="14" />
                <polygon points="14,11 14,25 27,18" fill="currentColor" stroke="none" opacity="0.9" />
            </svg>
        ),
        title: 'Perner.Kino',
        rows: [
            { label: 'Kapacita', val: '15 osob' },
            { label: 'Koktejl', val: '240 osob' }
        ]
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
        title: 'Perner.Garden',
        rows: [
            { label: 'Koktejl', val: '240 osob' }
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
