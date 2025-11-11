import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setIsSending(true);
    setPopupMessage('');
    setShowPopup(false);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(
      () => {
        setPopupMessage('✅ Message envoyé avec succès !');
        setShowPopup(true);
        setForm({ name: '', email: '', message: '' });
        setIsSending(false);
      },
      error => {
        setPopupMessage('❌ Erreur lors de l\'envoi. Réessayez.');
        setShowPopup(true);
        console.error(error.text);
        setIsSending(false);
      }
    );
  };

  return (
    <section id="contact" className="section-contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-container two-tone-bg">
        {/* Bloc coordonnées */}
        <div className="contact-info">
          {/* Adresse */}
          <div className="info-block full-width">
            <FaMapMarkerAlt className="info-icon" />
            <h4>Adresse</h4>
            <p>Auvergne-Rhône-Alpes, France</p>
          </div>

          {/* Téléphone + Email */}
          <div className="info-bottom">
            <div className="info-block">
              <FaPhoneAlt className="info-icon" />
              <h4>Téléphone</h4>
              <p>+33 7 45 72 96 63</p>
            </div>
            <div className="info-block">
              <FaEnvelope className="info-icon" />
              <h4>Email</h4>
              <p>akousiabi860@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bloc formulaire */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nom"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? 'Envoi...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>

      {/* Popup de confirmation */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p style={{ color: popupMessage.includes('✅') ? 'green' : 'red', fontWeight: 'bold' }}>
              {popupMessage}
            </p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
