import React from 'react';
import './UseCases.css';

const uiCases = [
    { title: 'KONFERENCE, KONGRESY & SUMMITY', desc: 'Velkokapacitní profesionální akce s multi-stage setup.' },
    { title: 'VÝSTAVY, VELETRHY & SHOWCASE', desc: 'Flexibilní prostor pro produktové prezentace.' },
    { title: 'PRODUCT LAUNCH & BRAND EVENTS', desc: 'Atmosphérický prostor pro nezapomitelný launch.' },
    { title: 'FIREMNÍ & GALA EVENTY', desc: 'Elegantní prostředí pro premium corporate gatherings.' },
    { title: 'KULTURNÍ & VEŘEJNÉ AKCE', desc: 'Unikátní venue pro kulturní programy a veřejnost.' },
    { title: 'MULTIFORMÁTOVÉ & HYBRIDNÍ AKCE', desc: 'AI-ready infrastruktura pro online + offline combo.' }
];

const UseCases = () => {
    return (
        <section className="usecases section-pad">
            <div className="usecases__bg" aria-hidden="true" />
            <div className="container usecases__inner">
                <div className="usecases__header">
                    <div className="label">Typy eventů</div>
                    <h2>JAKÉ ZÁŽITKY U NÁS MŮŽETE VYTVOŘIT?</h2>
                </div>
                <div className="usecases__grid">
                    {uiCases.map((item, idx) => (
                        <div key={idx} className="usecases__card">
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
