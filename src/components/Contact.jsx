import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message envoyé !');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nom" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div className="contact-links">
        <p>GitHub: <a href="https://github.com/patience228">mon-compte</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/akou-siabi">mon-profil</a></p>
        <p><a href="/CV_Siabi_Patience.pdf" download>
          Télécharger CV
        </a></p>
      </div>
    </section>
  );
};

export default Contact;
