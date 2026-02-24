import React, { useState, useEffect, useRef } from 'react';
import './ExitIntentPopup.css';

const PORTAL_ID = '25662392';
const FORM_ID = 'adcabaf2-3b40-4937-bc02-cbf251d6135b';
const SESSION_KEY = 'perner_exit_shown';

const ExitIntentPopup = () => {
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [form, setForm] = useState({ firstname: '', email: '', phone: '' });
    const timerRef = useRef(null);
    const shownRef = useRef(false);

    const show = () => {
        if (shownRef.current) return;
        if (sessionStorage.getItem(SESSION_KEY)) return;
        shownRef.current = true;
        sessionStorage.setItem(SESSION_KEY, '1');
        setVisible(true);
    };

    useEffect(() => {
        // Minimum 8s on page before popup can fire
        timerRef.current = setTimeout(() => {
            const onMouseLeave = (e) => {
                if (e.clientY <= 0) show();
            };
            document.addEventListener('mouseleave', onMouseLeave);
            return () => document.removeEventListener('mouseleave', onMouseLeave);
        }, 8000);

        return () => clearTimeout(timerRef.current);
    }, []);

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
                            { name: 'email', value: form.email },
                            { name: 'phone', value: form.phone },
                        ].filter(f => f.value),
                        context: {
                            pageUri: window.location.href,
                            pageName: document.title,
                        },
                    }),
                }
            );
            setStatus(res.ok ? 'success' : 'error');
        } catch {
            setStatus('error');
        }
    };

    const handleClose = () => setVisible(false);

    if (!visible) return null;

    return (
        <div className="exit-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-label="Nezávazná poptávka">
            <div className="exit-popup" onClick={(e) => e.stopPropagation()}>
                <button className="exit-popup__close" onClick={handleClose} aria-label="Zavřít">✕</button>

                {status === 'success' ? (
                    <div className="exit-popup__success">
                        <div className="exit-popup__check">✓</div>
                        <h3>Děkujeme!</h3>
                        <p>Ozveme se vám do 24 hodin.</p>
                    </div>
                ) : (
                    <>
                        <div className="exit-popup__badge">Exkluzivní nabídka</div>
                        <h2 className="exit-popup__title">Odcházíte?</h2>
                        <p className="exit-popup__sub">Nechte nám kontakt – ozveme se do&nbsp;24&nbsp;hodin s nabídkou na míru.</p>
                        <form onSubmit={handleSubmit} className="exit-popup__form">
                            <input
                                type="text"
                                name="firstname"
                                className="form__input"
                                placeholder="Jméno"
                                value={form.firstname}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                className="form__input"
                                placeholder="E-mail *"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                className="form__input"
                                placeholder="Telefon"
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="btn btn--gold exit-popup__btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Odesílám…' : 'Chci nabídku zdarma'}
                            </button>
                            {status === 'error' && <p className="form__error">Něco se pokazilo. Zkuste to prosím znovu.</p>}
                        </form>
                        <p className="exit-popup__note">Bez závazků. Odpovídáme do 24 hodin.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ExitIntentPopup;
