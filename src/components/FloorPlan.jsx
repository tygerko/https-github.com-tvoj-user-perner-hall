import React, { useState } from 'react';
import './FloorPlan.css';

const setups = [
    {
        slug: 'setup-a1-b2',
        label: 'Setup A1 + B2',
        pdf: '/assets/space-plans/Event_SET UP A1 + B2.pdf',
        alt: 'Eventový prostor Praha Karlín – Setup A1+B2, sálové uspořádání pro konference a firemní akce, PernerKarlín',
    },
    {
        slug: 'setup-a2-b3',
        label: 'Setup A2 + B3',
        pdf: '/assets/space-plans/Event_SET UP A2 + B3.pdf',
        alt: 'Pronájem eventového sálu Praha – Setup A2+B3, banketové uspořádání, PernerKarlín Pernerova',
    },
    {
        slug: 'setup-a3',
        label: 'Setup A3',
        pdf: '/assets/space-plans/Event_SET UP A3.pdf',
        alt: 'Eventový prostor Karlín Praha – Setup A3, cocktail party uspořádání až 700 hostů, Scott Weber',
    },
    {
        slug: 'setup-a4',
        label: 'Setup A4',
        pdf: '/assets/space-plans/Event_SET UP A4.pdf',
        alt: 'Firemní akce Praha Karlín – Setup A4, divadelní uspořádání, pronájem sálu PernerKarlín',
    },
    {
        slug: 'setup-a5-b5',
        label: 'Setup A5 + B5',
        pdf: '/assets/space-plans/Event_SET UP  A5 + B5.pdf',
        alt: 'Konference Praha Karlín – Setup A5+B5, hybridní event prostory, PernerKarlín Scott Weber Workspace',
    },
    {
        slug: 'setup-a6-b2',
        label: 'Setup A6 + B2',
        pdf: '/assets/space-plans/Event_SET UP  A6 + B2.pdf',
        alt: 'Teambuilding a workshopy Praha – Setup A6+B2, flexibilní uspořádání sálu, Pernerova 8 Karlín',
    },
    {
        slug: 'setup-c1',
        label: 'Setup C1',
        pdf: '/assets/space-plans/Event_SET UP  C1.pdf',
        alt: 'Pronájem sálu Praha Karlín – Setup C1, gala dinner a večerní akce, PernerKarlín eventový prostor',
    },
    {
        slug: 'setup-c2',
        label: 'Setup C2',
        pdf: '/assets/space-plans/Event_SET UP  C2.pdf',
        alt: 'Event venue Praha – Setup C2, produktové launche a prezentace, PernerKarlín Pernerova Karlín',
    },
    {
        slug: 'setup-c3',
        label: 'Setup C3',
        pdf: '/assets/space-plans/Event_SET UP  C3.pdf',
        alt: 'Firemní večírek Praha Karlín – Setup C3, standing party uspořádání, Scott Weber PernerKarlín',
    },
];

const FloorPlan = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <section className="floorplan section-pad" id="floorplan">
            <div className="container">
                <div className="floorplan__header">
                    <div className="label">Prostorová dispozice</div>
                    <h2>SPACE PLANS</h2>
                    <p className="floorplan__sub">Vyberte uspořádání pro váš event – klikněte pro zvětšení nebo stáhněte PDF podklady.</p>
                </div>

                {/* Floor plan overview */}
                <div className="floorplan__overview">
                    <figure className="floorplan__wrapper" onClick={() => setLightbox({ src: '/assets/floor-plan.jpg', alt: '3D půdorys – PernerKarlín Pernerova 8 Praha Karlín, eventový prostor až 700 hostů' })}>
                        <img
                            className="floorplan__img"
                            src="/assets/floor-plan.jpg"
                            alt="3D půdorys PernerKarlín – eventový prostor Praha Karlín, Pernerova 8, kapacita až 700 hostů"
                        />
                        <div className="floorplan__zoom-hint">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
                            Zvětšit
                        </div>
                        <figcaption className="floorplan__caption">
                            PernerKarlín – 3D půdorys eventového prostoru, Pernerova 8, Praha 8 Karlín.
                            Kapacita až 700 hostů. Flexibilní sál pro konference, teambuilding, firemní akce, gala dinnery a produktové launche.
                        </figcaption>
                    </figure>
                    <div className="floorplan__legend">
                        <div className="floorplan__legend-item"><div className="floorplan__dot" style={{ background: '#b89a6a' }}></div> Work</div>
                        <div className="floorplan__legend-item"><div className="floorplan__dot" style={{ background: '#e5d5b7' }}></div> Socialize</div>
                        <div className="floorplan__legend-item"><div className="floorplan__dot" style={{ background: '#c4a26a' }}></div> Meet</div>
                        <div className="floorplan__legend-item"><div className="floorplan__dot" style={{ background: '#9a9590' }}></div> Support</div>
                    </div>
                </div>

                {/* Setup cards */}
                <div className="floorplan__setups-header">
                    <h3>Varianty uspořádání</h3>
                </div>
                <div className="floorplan__grid">
                    {setups.map((s) => (
                        <article key={s.slug} className="setup-card">
                            <div
                                className="setup-card__img-wrap"
                                onClick={() => setLightbox({ src: `/assets/space-plans/thumbs/${s.slug}.jpg`, alt: s.alt })}
                                role="button"
                                aria-label={`Zvětšit ${s.label}`}
                            >
                                <img
                                    src={`/assets/space-plans/thumbs/${s.slug}.jpg`}
                                    alt={s.alt}
                                    className="setup-card__img"
                                    loading="lazy"
                                />
                                <div className="setup-card__zoom">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
                                </div>
                            </div>
                            <div className="setup-card__body">
                                <span className="setup-card__label">{s.label}</span>
                                <a
                                    href={s.pdf}
                                    download
                                    className="setup-card__download"
                                    aria-label={`Stáhnout PDF – ${s.label}`}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                    Stáhnout PDF
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div className="fp-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
                    <button className="fp-lightbox__close" onClick={() => setLightbox(null)} aria-label="Zavřít">✕</button>
                    <img src={lightbox.src} alt={lightbox.alt} className="fp-lightbox__img" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </section>
    );
};

export default FloorPlan;
