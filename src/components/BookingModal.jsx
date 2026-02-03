import React from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay active`} onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h3>Zkontrolovat dostupnost</h3>
                    <button className="modal__close" onClick={onClose}>&times;</button>
                </div>
                <div className="modal__body">
                    <form id="bookingForm" onSubmit={(e) => { e.preventDefault(); alert('Request sent! (Mock)'); onClose(); }}>
                        <div className="form__row">
                            <div className="form__group">
                                <label className="form__label">Jméno</label>
                                <input type="text" className="form__input" id="bName" required />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Příjmení</label>
                                <input type="text" className="form__input" id="bSurname" required />
                            </div>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Email</label>
                            <input type="email" className="form__input" id="bEmail" required />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Telefon</label>
                            <input type="tel" className="form__input" id="bPhone" required />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Společnost</label>
                            <input type="text" className="form__input" id="bCompany" />
                        </div>
                        <div className="form__row">
                            <div className="form__group">
                                <label className="form__label">Datum akce</label>
                                <input type="date" className="form__input" id="bDate" required />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Počet hosté</label>
                                <input type="number" className="form__input" id="bGuests" min="10" max="700" placeholder="npr. 150" required />
                            </div>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Typ akce</label>
                            <select className="form__select" id="bType" required>
                                <option value="">Vybrte typ…</option>
                                <option value="conference">Konference / Summit</option>
                                <option value="corporate">Firemní event</option>
                                <option value="product">Product Launch</option>
                                <option value="gala">Gala / společenský</option>
                                <option value="hybrid">Hybridní akce</option>
                                <option value="other">Jiné</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Doplňkové informace</label>
                            <textarea className="form__textarea" id="bMsg" placeholder="Popis vaší akce, požadavky…"></textarea>
                        </div>
                        <button type="submit" className="btn btn--gold form__submit">Odeslat žádost</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
