import React from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="hero">
            <div className="hero__bg"></div>
            <div className="hero__content">
                <div className="hero__label label">Scott Weber Workspace · Prague</div>
                <h1 className="hero__title">Perner<br /><em>Hall</em></h1>
                <p className="hero__desc">
                    Ikonické prožitkové eventové prostředí s kapacitou až 500 hostů.
                    AI-ready experience ekosystém pro maximální zapojení všech účastníků.
                </p>
                <div className="hero__btns">
                    <button className="btn btn--gold" onClick={onOpenModal}>Zkontrolovat dostupnost</button>
                    <a href="#floorplan" className="btn btn--outline">Zobrazit půdorys</a>
                </div>
            </div>
            <div className="hero__accent"></div>
        </section>
    );
};

export default Hero;
