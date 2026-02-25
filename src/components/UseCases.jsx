import React from 'react';
import './UseCases.css';

const uiCases = [
    { title: 'Konference, kongresy & summity', desc: 'Velkokapacitní profesionální akce s multi-stage setup a hybridním přenosem.' },
    { title: 'Výstavy, veletrhy & showcase', desc: 'Flexibilní prostor pro produktové prezentace a interaktivní expozice.' },
    { title: 'Product launch, press & brand events', desc: 'Exkluzivní prostor pro představení produktů, tiskové konference a brand eventy.' },
    { title: 'Firemní, společenské & gala eventy', desc: 'Elegantní prostor pro corporate events a slavnostní večery.' },
    { title: 'Kulturní & veřejné akce', desc: 'Unikátní venue pro kulturní programy, výstavy a veřejné události.' },
    { title: 'Multiformátové & hybridní akce', desc: 'AI-ready infrastruktura pro jedinečné hybridní eventy.' },
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
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
