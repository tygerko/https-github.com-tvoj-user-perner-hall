import React from 'react';
import './FloorPlan.css';

const FloorPlan = () => {
    return (
        <section className="floorplan section-pad" id="floorplan">
            <div className="container">
                <div className="floorplan__header">
                    <div className="label">Prostorová dispozice</div>
                    <h2>SPACE PLAN</h2>
                    <p className="floorplan__sub">Kompletný prehľad priestorových plánov – scrollujte pre zobrazenie všetkých variantov.</p>
                </div>

                {/* Big scrollable PDF */}
                <div className="floorplan__pdf-wrap">
                    <iframe
                        className="floorplan__pdf"
                        src="/assets/pdf/251212_PK8_SPACEPLANY_AKTUAL.pdf"
                        title="PernerKarlín – Space Plans"
                    />
                </div>
            </div>
        </section>
    );
};

export default FloorPlan;
