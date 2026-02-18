import React from 'react';
import './UseCases.css';

const uiCases = [
    { num: '01', title: 'KONFERENCE, KONGRESY & SUMMITY', desc: 'Velkokapacitní profesionální akce s multi-stage setup.' },
    { num: '02', title: 'VÝSTAVY, VELETRHY & SHOWCASE', desc: 'Flexibilní prostor pro produktové prezentace.' },
    { num: '03', title: 'PRODUCT LAUNCH & BRAND EVENTS', desc: 'Atmosphérický prostor pro nezapomitelný launch.' },
    { num: '04', title: 'FIREMNÍ & GALA EVENTY', desc: 'Elegantní prostprostředí pro premium corporate gatherings.' },
    { num: '05', title: 'KULTURNÍ & VEŘEJNÉ AKCE', desc: 'Unikátní venue pro kulturní programy a veřejnost.' },
    { num: '06', title: 'MULTIFORMÁTOVÉ & HYBRIDNÍ AKCE', desc: 'AI-ready infrastruktura pro online + offline combo.' }
];

const UseCases = () => {
    return (
        <section className="usecases section-pad">
            <div className="container">
                <div className="usecases__header">
                    <div className="label">Typy eventů</div>
                    <h2>JAKÉ ZÁŽITKY U NÁS MŮŽETE VYTVOŘIT?</h2>
                </div>
                <div className="usecases__grid">
                    {uiCases.map((item, idx) => (
                        <div key={idx} className="usecases__card">
                            <span className="usecases__num">{item.num}</span>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
