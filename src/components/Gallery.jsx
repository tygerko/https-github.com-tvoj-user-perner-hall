import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery section-pad" id="gallery">
            <div className="container">
                <div className="gallery__header">
                    <div className="label">Atmosféra</div>
                    <h2>Creating memorable moments</h2>
                </div>
                <div className="gallery__grid">
                    <div className="gallery__item">
                        <img src="/assets/venue-main.jpg" alt="Perner Hall – conference" />
                    </div>
                    <div className="gallery__item">
                        <img src="/assets/venue-main.jpg" alt="Perner Hall – detail svetla" style={{ objectPosition: '70% center' }} />
                    </div>
                    <div className="gallery__item">
                        <img src="/assets/venue-main.jpg" alt="Perner Hall – architektúra" style={{ objectPosition: '20% top' }} />
                    </div>
                    <div className="gallery__item">
                        <img src="/assets/floor-plan.jpg" alt="PK8 Floor Plan" style={{ objectPosition: 'center 40%' }} />
                    </div>
                    <div className="gallery__item">
                        <img src="/assets/venue-main.jpg" alt="Perner Hall – detail" style={{ objectPosition: '50% bottom' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
