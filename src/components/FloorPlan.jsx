import React from 'react';
import './FloorPlan.css';

const FloorPlan = () => {
    return (
        <section className="floorplan section-pad" id="floorplan">
            <div className="container">
                <div className="floorplan__header">
                    <div className="label">Prostorová dispozice</div>
                    <h2>3D Půdorys komplexu</h2>
                </div>
                <div className="floorplan__wrapper">
                    <img className="floorplan__img" src="/assets/floor-plan.jpg" alt="3D Floor Plan – PK8 Pernerova" />
                    <div className="floorplan__legend">
                        <div className="floorplan__legend-item">
                            <div className="floorplan__dot" style={{ background: '#b89a6a' }}></div> Work
                        </div>
                        <div className="floorplan__legend-item">
                            <div className="floorplan__dot" style={{ background: '#e5d5b7' }}></div> Socialize
                        </div>
                        <div className="floorplan__legend-item">
                            <div className="floorplan__dot" style={{ background: '#c4a26a' }}></div> Meet
                        </div>
                        <div className="floorplan__legend-item">
                            <div className="floorplan__dot" style={{ background: '#9a9590' }}></div> Support
                        </div>
                    </div>
                </div>
                <div className="floorplan__actions">
                    <a href="#" className="btn btn--gold-outline" onClick={(e) => { e.preventDefault(); alert('PDF download – placeholder'); }}>⬇ Stáhnout půdorysy (PDF)</a>
                </div>
            </div>
        </section>
    );
};

export default FloorPlan;
