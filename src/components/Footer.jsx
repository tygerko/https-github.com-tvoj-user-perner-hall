import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className="contact section-pad" id="contact">
                <div className="container">
                    <div className="contact__grid">
                        {/* Form */}
                        <div className="contact__form-wrap">
                            <div className="label" style={{ marginBottom: '.8rem' }}>Kontakt</div>
                            <h2>OZVĚTE SE NÁM</h2>
                            <p>Máte otázky nebo chcete naplánovat event? Napíšte nám.</p>

                            <form id="contactForm" onSubmit={(e) => { e.preventDefault(); alert('Success! (Mock)'); }}>
                                <div className="form__row">
                                    <div className="form__group">
                                        <label className="form__label">Jméno</label>
                                        <input type="text" className="form__input" id="cName" required />
                                    </div>
                                    <div className="form__group">
                                        <label className="form__label">Příjmení</label>
                                        <input type="text" class="form__input" id="cSurname" required />
                                    </div>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Email</label>
                                    <input type="email" className="form__input" id="cEmail" required />
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Telefon</label>
                                    <input type="tel" className="form__input" id="cPhone" />
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Typ akce</label>
                                    <select className="form__select" id="cType">
                                        <option value="">Vybrte typ akce…</option>
                                        <option value="conference">Konference / Summit</option>
                                        <option value="corporate">Firemní event</option>
                                        <option value="product">Product Launch</option>
                                        <option value="gala">Gala / společenský</option>
                                        <option value="other">Jiné</option>
                                    </select>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Zpráva</label>
                                    <textarea className="form__textarea" id="cMsg" placeholder="Popis vaší akce, termín, počet hosté…"></textarea>
                                </div>
                                <button type="submit" className="btn btn--gold form__submit">Odeslat zprávu</button>
                            </form>
                        </div>

                        {/* Info + map */}
                        <div className="contact__info">
                            <div className="contact__block">
                                <h4>Kontaktní osoba</h4>
                                <p><strong style={{ color: 'var(--clr-text)' }}>Petr Svoboda</strong><br />
                                    Head of Event Sales & Production<br />
                                    <a href="#">svoboda@scottweber.cz</a><br />
                                    <a href="tel:+420724286796">+420 724 286 796</a></p>
                            </div>
                            <div className="contact__block">
                                <h4>Lokalita</h4>
                                <p>PernerKarlín<br />Pernerova 727/40a<br />170 00 Praha – Karlín</p>
                            </div>
                            <div className="contact__block">
                                <h4>MHD</h4>
                                <p>Metro C – stanice <strong style={{ color: 'var(--clr-text)' }}>Křižíkova</strong> (3 min pěšky)<br />
                                    Tram 8, 14 – zastávka <strong style={{ color: 'var(--clr-text)' }}>Křižíkova</strong></p>
                            </div>
                            <div className="contact__map-wrap" id="mapWrap">
                                {/* Static map preview while API key is being set up */}
                                <div className="map-placeholder" style={{ width: '100%', height: '100%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '12px' }}>
                                    <img
                                        src="/assets/map-preview.png"
                                        alt="PernerHall Area Map Preview"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
                                    />
                                </div>
                                {/* 
                                {import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
                                    <iframe
                                        id="mapIframe"
                                        src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=Pernerova+8,Prague`}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="PernerHall – Pernerová 8, Praha"
                                        style={{ opacity: 1 }}
                                    ></iframe>
                                ) : null}
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <span className="footer__copy">© 2025 Scott Weber Workspace. All rights reserved.</span>
                        <span className="footer__logo">
                            <img src="/assets/logo-scott-weber.png" alt="Scott.Weber Workspace" style={{ height: '24px', width: 'auto' }} />
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
