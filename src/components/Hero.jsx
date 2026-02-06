import React from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="hero">
            <div className="hero__bg"></div>
            <div className="hero__content">
                <h1 className="hero__title">
                    PernerExperience
                    <span className="hero__subtitle">by Scott.Weber Workspace</span>
                </h1>
                <p className="hero__desc">
                    PernerKarlín by Scott.Weber nabízí ikonické eventové prostředí pro nezapomenutelné zážitky s kapacitou až 700 hostů, kde se technologie a zážitek spojují v AI-ready prostředí pro maximální zapojení každého účastníka.
                </p>
                <div className="hero__btns">
                    <button className="btn btn--gold" onClick={onOpenModal}>KONTAKTUJTE NÁS</button>
                    <a href="#floorplan" className="btn btn--outline">ZOBRAZIT SPACEPLANE</a>
                </div>
            </div>
            <div className="hero__accent"></div>
        </section>
    );
};

export default Hero;
