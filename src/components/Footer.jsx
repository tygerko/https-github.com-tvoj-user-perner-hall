import React, { useState } from 'react';
import './Footer.css';

const PORTAL_ID = '25662392';
const FORM_ID = 'adcabaf2-3b40-4937-bc02-cbf251d6135b';

const Footer = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        datum_akce: '',
        pocet_hostu: '',
        typ_akce: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fields: [
                            { name: 'firstname', value: form.firstname },
                            { name: 'lastname', value: form.lastname },
                            { name: 'email', value: form.email },
                            { name: 'phone', value: form.phone },
                            { name: 'company', value: form.company },
                            // HubSpot expects timestamp in ms for date fields
                            { name: 'datum_akce', value: form.datum_akce ? String(new Date(form.datum_akce).setHours(12, 0, 0, 0)) : '' },
                            { name: 'pocet_hostu', value: form.pocet_hostu },
                            { name: 'typ_akce', value: form.typ_akce },
                            { name: 'message', value: form.message },
                        ].filter(f => f.value),
                        context: {
                            pageUri: window.location.href,
                            pageName: document.title,
                        },
                    }),
                }
            );
            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <section className="contact section-pad" id="contact">
                <div className="container">
                    <div className="contact__grid">
                        {/* Form */}
                        <div className="contact__form-wrap">
                            {status === 'success' ? (
                                <div className="form__success form__success--full">
                                    <div className="form__success-icon">✓</div>
                                    <div className="label" style={{ marginBottom: '1rem' }}>Potvrzení</div>
                                    <h2 className="form__success-title">POPTÁVKA PŘIJATA</h2>
                                    <p className="form__success-text">Děkujeme za zájem o Perner.Experience.<br />Náš tým se vám ozve do 24 hodin s podrobnými informacemi a nabídkou na míru.</p>
                                </div>
                            ) : (
                            <>
                            <div className="label" style={{ marginBottom: '.8rem' }}>Kontakt</div>
                            <h2>OZVĚTE SE NÁM</h2>
                            <p>Máte otázky nebo chcete naplánovat event? Napíšte nám.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form__row">
                                    <div className="form__group">
                                        <label className="form__label">Jméno</label>
                                        <input type="text" name="firstname" className="form__input" value={form.firstname} onChange={handleChange} required />
                                    </div>
                                    <div className="form__group">
                                        <label className="form__label">Příjmení</label>
                                        <input type="text" name="lastname" className="form__input" value={form.lastname} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Email</label>
                                    <input type="email" name="email" className="form__input" value={form.email} onChange={handleChange} required />
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Telefon</label>
                                    <input type="tel" name="phone" className="form__input" value={form.phone} onChange={handleChange} />
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Firma</label>
                                    <input type="text" name="company" className="form__input" value={form.company} onChange={handleChange} />
                                </div>
                                <div className="form__row">
                                    <div className="form__group">
                                        <label className="form__label">Datum akce</label>
                                        <input type="date" name="datum_akce" className="form__input form__input--date" value={form.datum_akce} onChange={handleChange} />
                                    </div>
                                    <div className="form__group">
                                        <label className="form__label">Počet hostů</label>
                                        <input type="number" name="pocet_hostu" className="form__input" placeholder="např. 200" value={form.pocet_hostu} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Typ akce</label>
                                    <select name="typ_akce" className="form__select" value={form.typ_akce} onChange={handleChange}>
                                        <option value="">Vyberte typ akce…</option>
                                        <option value="Konference / Summit">Konference / Summit</option>
                                        <option value="Firemni event">Firemní event</option>
                                        <option value="Product Launch">Product Launch</option>
                                        <option value="Gala / Spolecensky vecer">Gala / Společenský večer</option>
                                        <option value="Teambuilding">Teambuilding</option>
                                        <option value="Prezentace / Workshop">Prezentace / Workshop</option>
                                        <option value="Jine (vypiste nize)">Jiné (vypište níže)</option>
                                    </select>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Zpráva</label>
                                    <textarea name="message" className="form__textarea" placeholder="Popis vaší akce, požadavky…" value={form.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn--gold form__submit" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Odesílám…' : 'Odeslat žádost'}
                                </button>
                                {status === 'error' && <p className="form__error">Něco se pokazilo. Zkuste to prosím znovu.</p>}
                            </form>
                            </>
                            )}
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
                                <iframe
                                    id="mapIframe"
                                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=50.091391,14.455645&zoom=18`}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Perner.Experience – Pernerova 727/40a, Praha Karlín"
                                ></iframe>
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
