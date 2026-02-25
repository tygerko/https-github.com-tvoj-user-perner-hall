import React, { useState, useRef, useCallback } from 'react';
import './FloorPlan.css';

const slides = [
    {
        img: '/assets/floor-plan.jpg',
        label: 'Celkový půdorys',
        sublabel: 'Přehled všech prostorů Perner.Experience',
        alt: 'Celkový 3D půdorys eventového prostoru Perner.Experience Praha Karlín – přehled všech sálů, Perner.Hall, Perner.Central, Perner.Klub, Perner.Kino, Perner.Garden',
        pdf: '/assets/pdf/perner-karlin-varianty-usporadani.pdf',
        pdfName: 'perner-karlin-varianty-usporadani.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a1-b2.jpg',
        label: 'Divadlo: Perner.Hall + Perner.Central',
        sublabel: 'Divadelní uspořádání – Hall 300 os. / Central 70 os.',
        alt: 'Půdorys divadelního uspořádání Perner.Hall a Perner.Central – konference a firemní akce Praha Karlín, Perner.Experience eventový prostor',
        pdf: '/assets/space-plans/perner-experience-divadlo-hall-central.pdf',
        pdfName: 'perner-experience-divadlo-hall-central.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a2-b3.jpg',
        label: 'Škola: Perner.Hall + Perner.Central',
        sublabel: 'Školní uspořádání – Hall 140 os. / Central 36 os.',
        alt: 'Půdorys školního uspořádání Perner.Hall a Perner.Central – workshopy a školení Praha Karlín, Perner.Experience event venue',
        pdf: '/assets/space-plans/perner-experience-skola-hall-central.pdf',
        pdfName: 'perner-experience-skola-hall-central.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a3.jpg',
        label: 'Kabaret: Perner.Hall',
        sublabel: 'Kabaretní uspořádání hlavního sálu',
        alt: 'Půdorys kabaretního uspořádání Perner.Hall – společenské večery a firemní akce Praha Karlín, Perner.Experience',
        pdf: '/assets/space-plans/perner-experience-kabaret-hall.pdf',
        pdfName: 'perner-experience-kabaret-hall.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a4.jpg',
        label: 'Banket: Perner.Hall',
        sublabel: 'Banketové uspořádání – až 240 osob',
        alt: 'Půdorys banketového uspořádání Perner.Hall – gala dinner a společenský večer Praha Karlín, Perner.Experience event prostor',
        pdf: '/assets/space-plans/perner-experience-banket-hall.pdf',
        pdfName: 'perner-experience-banket-hall.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a5-b5.jpg',
        label: 'Banket: Perner.Hall + Perner.Central',
        sublabel: 'Banketové uspořádání – Hall 225 os. / Central 60 os.',
        alt: 'Půdorys banketového uspořádání Perner.Hall a Perner.Central – gala večery a firemní bankety Praha Karlín, Perner.Experience',
        pdf: '/assets/space-plans/perner-experience-banket-hall-central.pdf',
        pdfName: 'perner-experience-banket-hall-central.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a6-b2.jpg',
        label: 'Koktejl: Perner.Hall + Perner.Central',
        sublabel: 'Koktejlní uspořádání – Hall 450 os. / Central 100 os.',
        alt: 'Půdorys koktejlního uspořádání Perner.Hall a Perner.Central – cocktail party a networking Praha Karlín, Perner.Experience',
        pdf: '/assets/space-plans/perner-experience-koktejl-hall-central.pdf',
        pdfName: 'perner-experience-koktejl-hall-central.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-c1.jpg',
        label: 'Divadlo: Perner.Hall 1 & Hall 2',
        sublabel: 'Divadelní uspořádání – Hall 1: 170 os. / Hall 2: 130 os.',
        alt: 'Půdorys divadelního uspořádání Perner.Hall 1 a Hall 2 – summity a konference Praha Karlín, Perner.Experience event venue',
        pdf: '/assets/space-plans/perner-experience-divadlo-hall1-hall2.pdf',
        pdfName: 'perner-experience-divadlo-hall1-hall2.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-c2.jpg',
        label: 'Škola: Perner.Hall 1 & Hall 2',
        sublabel: 'Školní uspořádání – Hall 1: 90 os. / Hall 2: 70 os.',
        alt: 'Půdorys školního uspořádání Perner.Hall 1 a Hall 2 – školení a workshopy Praha Karlín, Perner.Experience eventový prostor',
        pdf: '/assets/space-plans/perner-experience-skola-hall1-hall2.pdf',
        pdfName: 'perner-experience-skola-hall1-hall2.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-c3.jpg',
        label: 'Koktejl: Perner.Hall 1 & Hall 2',
        sublabel: 'Koktejlní uspořádání – Hall 1: 820 os. / Hall 2: 750 os.',
        alt: 'Půdorys koktejlního uspořádání Perner.Hall 1 a Hall 2 – standing party a firemní večírek Praha Karlín, Perner.Experience',
        pdf: '/assets/space-plans/perner-experience-koktejl-hall1-hall2.pdf',
        pdfName: 'perner-experience-koktejl-hall1-hall2.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
];

const FloorPlan = () => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const MIN_SWIPE = 50;

    const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), []);
    const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), []);

    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchMove  = (e) => { touchEndX.current = e.touches[0].clientX; };
    const onTouchEnd   = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > MIN_SWIPE) diff > 0 ? next() : prev();
        touchStartX.current = null;
        touchEndX.current   = null;
    };

    const slide = slides[current];

    return (
        <section
            className="floorplan section-pad"
            id="floorplan"
            aria-label="Space Plan – varianty uspořádání Perner.Experience Praha Karlín"
        >
            <div className="container">
                <div className="floorplan__header">
                    <div className="label">Prostorová dispozice</div>
                    <h2>SPACE PLAN</h2>
                    <p className="floorplan__sub">
                        Vyberte variantu uspořádání – sálové, banketové, divadelní, cocktail či hybridní event pro až 700 hostů.
                    </p>
                </div>

                {/* Slider */}
                <div
                    className="spslider"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    role="region"
                    aria-label={`Space plan ${current + 1} z ${slides.length}: ${slide.label}`}
                >
                    <div className="spslider__img-wrap">
                        <img
                            key={current}
                            src={slide.img}
                            alt={slide.alt}
                            className="spslider__img"
                            loading={current === 0 ? 'eager' : 'lazy'}
                            draggable="false"
                        />
                    </div>

                    {/* Info bar */}
                    <div className="spslider__bar">
                        <div className="spslider__info">
                            <span className="spslider__label">{slide.label}</span>
                            <span className="spslider__sub">{slide.sublabel}</span>
                        </div>
                        <a
                            href={slide.pdf}
                            download={slide.pdfName}
                            className="spslider__download"
                            aria-label={`${slide.pdfLabel} – ${slide.label}`}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            {slide.pdfLabel}
                        </a>
                    </div>

                    {/* Counter */}
                    <div className="spslider__counter" aria-hidden="true">
                        {current + 1} / {slides.length}
                    </div>

                    {/* Arrows */}
                    <button className="spslider__arrow spslider__arrow--prev" onClick={prev} aria-label="Předchozí uspořádání">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button className="spslider__arrow spslider__arrow--next" onClick={next} aria-label="Další uspořádání">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="spslider__dots" role="tablist" aria-label="Výběr uspořádání">
                    {slides.map((s, i) => (
                        <button
                            key={i}
                            className={`spslider__dot${i === current ? ' active' : ''}`}
                            onClick={() => setCurrent(i)}
                            role="tab"
                            aria-selected={i === current}
                            aria-label={s.label}
                        />
                    ))}
                </div>

                {/* SEO list — viditeľné pre crawlerov, vizuálne skryté */}
                <ul className="spslider__seo-list" aria-hidden="true">
                    {slides.map((s, i) => (
                        <li key={i}>
                            <a href={s.pdf} download={s.pdfName}>
                                {s.label} – {s.sublabel} – Perner.Experience Praha Karlín
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FloorPlan;
