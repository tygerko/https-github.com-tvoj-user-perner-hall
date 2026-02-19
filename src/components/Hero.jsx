import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.25;
        }
    }, []);

    return (
        <section className="hero">
            <div className="hero__bg">
                <video
                    ref={videoRef}
                    className="hero__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/venue-main.jpg"
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="hero__content">
                <h1 className="hero__title">
                    PERNER.EXPERIENCE
                    <span className="hero__subtitle">by Scott.Weber Workspace</span>
                </h1>
                <p className="hero__desc">
                    PernerKarlín by Scott.Weber nabízí ikonické eventové prostředí pro nezapomenutelné zážitky s kapacitou až 700 hostů, kde se technologie a zážitek spojují v AI-ready prostředí pro maximální zapojení každého účastníka.
                </p>
                <div className="hero__btns">
                    <button className="btn btn--gold" onClick={onOpenModal}>NEZÁVAZNÁ POPTÁVKA</button>
                    <a href="#floorplan" className="btn btn--outline">ZOBRAZIT SPACE PLAN</a>
                </div>
            </div>
            <div className="hero__accent"></div>
        </section>
    );
};

export default Hero;
