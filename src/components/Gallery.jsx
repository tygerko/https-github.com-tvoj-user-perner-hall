import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        { src: '/assets/venue-main.jpg', alt: 'PernerHall – conference' },
        { src: '/assets/venue-main.jpg', alt: 'PernerHall – detail svetla', style: { objectPosition: '70% center' } },
        { src: '/assets/venue-main.jpg', alt: 'PernerHall – architektúra', style: { objectPosition: '20% top' } },
        { src: '/assets/floor-plan.jpg', alt: 'PK8 Floor Plan', style: { objectPosition: 'center 40%' } },
        { src: '/assets/venue-main.jpg', alt: 'PernerHall – detail', style: { objectPosition: '50% bottom' } }
    ];

    return (
        <section className="gallery section-pad" id="gallery">
            <div className="container">
                <div className="gallery__header">
                    <div className="label">Atmosféra</div>
                    <h2>VYTVÁŘÍME NEZAPOMENUTELNÉ MOMENTY</h2>
                </div>
                <div className="gallery__grid">
                    {images.map((img, idx) => (
                        <div key={idx} className="gallery__item" onClick={() => setSelectedImg(img)}>
                            <img src={img.src} alt={img.alt} style={img.style} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImg && (
                <div className="lightbox" onClick={() => setSelectedImg(null)}>
                    <div className="lightbox__content">
                        <img src={selectedImg.src} alt={selectedImg.alt} />
                        <button className="lightbox__close">&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
