import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const images = [
        { src: '/assets/gallery/PK8_Event1.jpg', alt: 'Perner Hall – event 1' },
        { src: '/assets/gallery/PK8_Event2.jpg', alt: 'Perner Hall – event 2' },
        { src: '/assets/gallery/PK8_Event3.jpg', alt: 'Perner Hall – event 3' },
        { src: '/assets/gallery/PK8_Event4.jpg', alt: 'Perner Hall – event 4' },
        { src: '/assets/gallery/PK8_Event5.jpg', alt: 'Perner Hall – event 5' },
        { src: '/assets/gallery/PK8_Event6.jpg', alt: 'Perner Hall – event 6' },
        { src: '/assets/gallery/PK8_Event7.jpg', alt: 'Perner Hall – event 7' },
        { src: '/assets/gallery/PK8_Event8.jpg', alt: 'Perner Hall – event 8' },
    ];

    const prev = useCallback(() => setSelectedIdx(i => (i - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setSelectedIdx(i => (i + 1) % images.length), [images.length]);

    useEffect(() => {
        if (selectedIdx === null) return;
        const handler = e => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'Escape') setSelectedIdx(null);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [selectedIdx, prev, next]);

    const selectedImg = selectedIdx !== null ? images[selectedIdx] : null;

    return (
        <section className="gallery section-pad" id="gallery">
            <div className="container">
                <div className="gallery__header">
                    <div className="label">Atmosféra</div>
                    <h2>VYTVÁŘÍME NEZAPOMENUTELNÉ MOMENTY</h2>
                </div>
                <div className="gallery__grid">
                    {images.map((img, idx) => (
                        <div key={idx} className="gallery__item" onClick={() => setSelectedIdx(idx)}>
                            <img src={img.src} alt={img.alt} style={img.style} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImg && (
                <div className="lightbox" onClick={() => setSelectedIdx(null)}>
                    <div className="lightbox__content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImg.src} alt={selectedImg.alt} />
                        <button className="lightbox__close" onClick={() => setSelectedIdx(null)}>&times;</button>
                        <button className="lightbox__prev" onClick={e => { e.stopPropagation(); prev(); }}>&#8249;</button>
                        <button className="lightbox__next" onClick={e => { e.stopPropagation(); next(); }}>&#8250;</button>
                        <div className="lightbox__counter">{selectedIdx + 1} / {images.length}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
