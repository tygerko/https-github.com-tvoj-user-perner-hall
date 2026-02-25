import React, { useState, useRef, useCallback } from 'react';
import './FloorPlan.css';
import PdfViewer from './PdfViewer';

const setups = [
    { slug: 'setup-a1-b2', label: 'Setup A1 + B2', alt: 'Eventový prostor Praha Karlín – Setup A1+B2, sálové uspořádání pro konference a firemní akce, PernerKarlín' },
    { slug: 'setup-a2-b3', label: 'Setup A2 + B3', alt: 'Pronájem eventového sálu Praha – Setup A2+B3, banketové uspořádání, PernerKarlín Pernerova' },
    { slug: 'setup-a3',    label: 'Setup A3',       alt: 'Eventový prostor Karlín Praha – Setup A3, cocktail party uspořádání až 700 hostů, Scott Weber' },
    { slug: 'setup-a4',    label: 'Setup A4',       alt: 'Firemní akce Praha Karlín – Setup A4, divadelní uspořádání, pronájem sálu PernerKarlín' },
    { slug: 'setup-a5-b5', label: 'Setup A5 + B5', alt: 'Konference Praha Karlín – Setup A5+B5, hybridní event prostory, PernerKarlín Scott Weber Workspace' },
    { slug: 'setup-a6-b2', label: 'Setup A6 + B2', alt: 'Teambuilding a workshopy Praha – Setup A6+B2, flexibilní uspořádání sálu, Pernerova 8 Karlín' },
    { slug: 'setup-c1',    label: 'Setup C1',       alt: 'Pronájem sálu Praha Karlín – Setup C1, gala dinner a večerní akce, PernerKarlín eventový prostor' },
    { slug: 'setup-c2',    label: 'Setup C2',       alt: 'Event venue Praha – Setup C2, produktové launche a prezentace, PernerKarlín Pernerova Karlín' },
    { slug: 'setup-c3',    label: 'Setup C3',       alt: 'Firemní večírek Praha Karlín – Setup C3, standing party uspořádání, Scott Weber PernerKarlín' },
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
                            </div>
                        </article>
                    ))}
                </div>

                {/* PDF Viewer */}
                <PdfViewer
                    file="/assets/pdf/PernerKarlin_varianty_usporadani.pdf"
                    downloadUrl="/assets/pdf/PernerKarlin_varianty_usporadani.pdf"
                    title="Varianty uspořádání – kompletní přehled"
                />

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
