import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Integrate your preferred email service / backend here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or want to chat? My inbox is always open.
          </p>
        </div>

        <div className="contact-inner">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <p>
              I'm currently open to freelance, full-time, and collaborative opportunities. 
              Feel free to reach out — I'll get back to you within 24 hours.
            </p>

            <div className="contact-items">
              {[
                { icon: '📍', label: 'Location', value: 'Najafgarh, New Delhi' },
                { icon: '📞', label: 'Phone', value: '+91 7011890323' },
                { icon: '✉️', label: 'Email', value: 'aditya.k2883@gmail.com' },
              ].map((item, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <span className="label">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {[
                { href: 'https://github.com/', icon: '🐙', label: 'GitHub' },
                { href: 'https://linkedin.com/', icon: '💼', label: 'LinkedIn' },
                { href: 'https://twitter.com/', icon: '🐦', label: 'Twitter' },
                { href: 'mailto:aditya.k2883@gmail.com', icon: '📧', label: 'Email' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-link" title={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="John Doe"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email" name="email" type="email" required
                  placeholder="john@example.com"
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" type="text" required
                placeholder="Project inquiry / Collaboration"
                value={form.subject} onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" required
                placeholder="Tell me about your project..."
                value={form.message} onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '15px' }}
            >
              {sent ? '✅ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
