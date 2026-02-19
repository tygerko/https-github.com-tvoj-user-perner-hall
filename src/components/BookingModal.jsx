import React, { useState } from 'react';
import './BookingModal.css';

const PORTAL_ID = '25662392';
const FORM_ID = 'adcabaf2-3b40-4937-bc02-cbf251d6135b';

const BookingModal = ({ isOpen, onClose }) => {
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

    if (!isOpen) return null;

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

    const handleClose = () => {
        onClose();
        // Reset after modal closes
        setTimeout(() => {
            setStatus('idle');
            setForm({ firstname: '', lastname: '', email: '', phone: '', company: '', datum_akce: '', pocet_hostu: '', typ_akce: '', message: '' });
        }, 300);
    };

    return (
        <div className="modal-overlay active" onClick={handleClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h3>{status === 'success' ? 'Poptávka přijata' : 'Zkontrolovat dostupnost'}</h3>
                    <button className="modal__close" onClick={handleClose}>&times;</button>
                </div>
                <div className="modal__body">
                    {status === 'success' ? (
                        <div className="form__success">
                            <div className="form__success-icon">✓</div>
                            <h3>POPTÁVKA PŘIJATA</h3>
                            <p>Děkujeme za zájem o Perner.Experience.<br />Náš tým se vám ozve do 24 hodin.</p>
                        </div>
                    ) : (
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
                                <input type="tel" name="phone" className="form__input" value={form.phone} onChange={handleChange} required />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Společnost</label>
                                <input type="text" name="company" className="form__input" value={form.company} onChange={handleChange} />
                            </div>
                            <div className="form__row">
                                <div className="form__group">
                                    <label className="form__label">Datum akce</label>
                                    <input type="date" name="datum_akce" className="form__input form__input--date" value={form.datum_akce} onChange={handleChange} required />
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Počet hostů</label>
                                    <input type="number" name="pocet_hostu" className="form__input" min="10" max="700" placeholder="npr. 150" value={form.pocet_hostu} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form__group">
                                <label className="form__label">Typ akce</label>
                                <select name="typ_akce" className="form__select" value={form.typ_akce} onChange={handleChange} required>
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
                                <label className="form__label">Doplňkové informace</label>
                                <textarea name="message" className="form__textarea" placeholder="Popis vaší akce, požadavky…" value={form.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn--gold form__submit" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Odesílám…' : 'Odeslat žádost'}
                            </button>
                            {status === 'error' && <p className="form__error">Něco se pokazilo. Zkuste to prosím znovu.</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
