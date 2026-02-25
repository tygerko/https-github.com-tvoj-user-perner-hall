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
        pdfLabel: 'Stáhnout kompletní plán',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a1-b2.jpg',
        label: 'Setup A1 + B2',
        sublabel: 'Sálové uspořádání pro konference a firemní akce',
        alt: 'Půdorys Setup A1 + B2 – sálové uspořádání pro konference a firemní akce, eventový prostor Perner.Experience Praha Karlín',
        pdf: '/assets/space-plans/artboard-1-setup-a1-b2.pdf',
        pdfName: 'artboard-1-setup-a1-b2.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a2-b3.jpg',
        label: 'Setup A2 + B3',
        sublabel: 'Banketové uspořádání pro gala večery',
        alt: 'Půdorys Setup A2 + B3 – banketové uspořádání pro gala večery, pronájem eventového sálu Praha Karlín Perner.Experience',
        pdf: '/assets/space-plans/artboard-2-setup-a2-b3.pdf',
        pdfName: 'artboard-2-setup-a2-b3.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a3.jpg',
        label: 'Setup A3',
        sublabel: 'Cocktail party uspořádání až 700 hostů',
        alt: 'Půdorys Setup A3 – cocktail party uspořádání až 700 hostů, eventový prostor Karlín Praha Perner.Experience',
        pdf: '/assets/space-plans/artboard-3-setup-a3.pdf',
        pdfName: 'artboard-3-setup-a3.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a4.jpg',
        label: 'Setup A4',
        sublabel: 'Divadelní uspořádání pro prezentace a summity',
        alt: 'Půdorys Setup A4 – divadelní uspořádání pro prezentace a firemní akce, Perner.Experience Praha Karlín',
        pdf: '/assets/space-plans/artboard-4-setup-a4.pdf',
        pdfName: 'artboard-4-setup-a4.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a5-b5.jpg',
        label: 'Setup A5 + B5',
        sublabel: 'Hybridní uspořádání pro multi-zone eventy',
        alt: 'Půdorys Setup A5 + B5 – hybridní event uspořádání, multi-zone konference Praha Karlín Perner.Experience',
        pdf: '/assets/space-plans/artboard-5-setup-a5-b5.pdf',
        pdfName: 'artboard-5-setup-a5-b5.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-a6-b2.jpg',
        label: 'Setup A6 + B2',
        sublabel: 'Flexibilní uspořádání pro teambuilding a workshopy',
        alt: 'Půdorys Setup A6 + B2 – flexibilní uspořádání pro teambuilding a workshopy, pronájem sálu Perner.Experience Karlín',
        pdf: '/assets/space-plans/artboard-6-setup-a6-b2.pdf',
        pdfName: 'artboard-6-setup-a6-b2.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-c1.jpg',
        label: 'Setup C1',
        sublabel: 'Gala dinner a večerní akce',
        alt: 'Půdorys Setup C1 – gala dinner a večerní akce, pronájem sálu Praha Karlín Perner.Experience eventový prostor',
        pdf: '/assets/space-plans/artboard-7-setup-c1.pdf',
        pdfName: 'artboard-7-setup-c1.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-c2.jpg',
        label: 'Setup C2',
        sublabel: 'Produktové launche a press prezentace',
        alt: 'Půdorys Setup C2 – produktové launche a press prezentace, event venue Praha Karlín Perner.Experience',
        pdf: '/assets/space-plans/artboard-8-setup-c2.pdf',
        pdfName: 'artboard-8-setup-c2.pdf',
        pdfLabel: 'Stáhnout PDF',
    },
    {
        img: '/assets/space-plans/thumbs/setup-c3.jpg',
        label: 'Setup C3',
        sublabel: 'Standing party a firemní večírek',
        alt: 'Půdorys Setup C3 – standing party a firemní večírek, eventový prostor Praha Karlín Perner.Experience',
        pdf: '/assets/space-plans/artboard-9-setup-c3.pdf',
        pdfName: 'artboard-9-setup-c3.pdf',
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
