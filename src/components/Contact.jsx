import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
      result => {
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
      <h2>Contact</h2>
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
          {isSending ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
          <p style={{ color: popupMessage.includes('✅') ? 'green' : 'red' }}>
            {popupMessage}
          </p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
};

// Style simple pour le popup
const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '300px'
  }
};

export default Contact;
