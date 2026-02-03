import React from 'react';
import './Capacities.css';

const capsData = [
    {
        title: '🎭 Hlavní sál – Perner Hall',
        rows: [
            { label: 'Divadlo (theater)', val: 'až 300 osob' },
            { label: 'Školní uspořádání', val: 'až 150 osob' },
            { label: 'Cocktail / standing', val: 'až 500 osob' },
            { label: 'Stropní výška', val: '4.2 m' }
        ]
    },
    {
        title: '🌐 Experience Event Floor',
        rows: [
            { label: 'Celková kapacita', val: 'až 700 osob' },
            { label: 'Paralelní programy', val: '✓' },
            { label: 'Networking zóny', val: '✓' },
            { label: 'VIP Lounge', val: '✓' }
        ]
    },
    {
        title: '🏡 Privátní zahrada',
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
                    <h2>Konfigurace prostorů</h2>
                </div>
                <div className="caps__grid">
                    {capsData.map((section, idx) => (
                        <div key={idx} className="caps__card">
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
