import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const images = [
        { jpg: '/assets/gallery/PK8_Event1.jpg', webp: '/assets/gallery/PK8_Event1.webp', alt: 'Perner.Hall eventový prostor s názvem Perner.Hall v Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event2.jpg', webp: '/assets/gallery/PK8_Event2.webp', alt: 'Perner.Kafe kavárna v lobby Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event3.jpg', webp: '/assets/gallery/PK8_Event3.webp', alt: 'Perner.Klub eventový prostor v Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event4.jpg', webp: '/assets/gallery/PK8_Event4.webp', alt: 'Perner.Central eventový prostor s kuchyní v Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event5.jpg', webp: '/assets/gallery/PK8_Event5.webp', alt: 'Perner.Klub2 eventový klubový prostor v Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event6.jpg', webp: '/assets/gallery/PK8_Event6.webp', alt: 'Perner.Hall1 nadrozměrný eventový sál v Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event7.jpg', webp: '/assets/gallery/PK8_Event7.webp', alt: 'Perner.Hall2 prostorný eventový prostor v Perner.Karlín' },
        { jpg: '/assets/gallery/PK8_Event8.jpg', webp: '/assets/gallery/PK8_Event8.webp', alt: 'Perner.Hall3 prostor pro eventy v Perner.Karlín' },
    ];

    const prev = useCallback(() => setSelectedIdx(i => (i - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setSelectedIdx(i => (i + 1) % images.length), [images.length]);

    const selectedImg = selectedIdx !== null ? images[selectedIdx] : null;

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
                            <picture>
                                <source srcSet={img.webp} type="image/webp" />
                                <img
                                    src={img.jpg}
                                    alt={img.alt}
                                    loading={idx === 0 ? 'eager' : 'lazy'}
                                    decoding={idx === 0 ? 'sync' : 'async'}
                                />
                            </picture>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImg && (
                <div className="lightbox" onClick={() => setSelectedIdx(null)}>
                    <div className="lightbox__content" onClick={e => e.stopPropagation()}>
                        <picture>
                            <source srcSet={selectedImg.webp} type="image/webp" />
                            <img src={selectedImg.jpg} alt={selectedImg.alt} />
                        </picture>
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
