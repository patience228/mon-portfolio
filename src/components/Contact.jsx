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

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nom"
          required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"
          required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="5"
          required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
