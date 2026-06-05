import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg({ text: '', type: '' });
    
    // SMTP/Direct Mail logic using EmailJS
    // STEPS TO MAKE IT WORK:
    // 1. Go to https://www.emailjs.com/ and create a free account
    // 2. Add a new Email Service (e.g., Gmail) and copy the Service ID
    // 3. Create a new Email Template and copy the Template ID
    // 4. Go to Account > API Keys and copy the Public Key
    // 5. Replace the placeholder strings below with your actual IDs
    
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Pragati Tiwari',
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setIsSending(false);
        setStatusMsg({ text: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // reset form
        setTimeout(() => setStatusMsg({ text: '', type: '' }), 5000);
      })
      .catch((err) => {
        setIsSending(false);
        setStatusMsg({ text: 'Failed to send message. Please try again.', type: 'error' });
        console.error('Email sending failed:', err);
      });
  };

  return (
    <section id="contact" className="section container" style={{ marginBottom: '6rem' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '4rem' }}>
        {/* Left Side: Contact Info */}
        <motion.div 
          style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Let's build something <br/><span className="text-gradient">data-driven.</span>
            </h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginTop: '1.5rem', lineHeight: 1.7 }}>
              I'm always open to discussing data projects, analytics dashboards, or opportunities to collaborate on innovative ideas. Let's connect!
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Mail size={24} color="var(--accent-color)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
                <a href="mailto:pragati@example.com" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                  pragati@example.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <MapPin size={24} color="var(--accent-color)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>India</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>Connect socially</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.85rem', borderRadius: '50%' }}>
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.85rem', borderRadius: '50%' }}>
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          className="contact-form-glass glass-panel"
          style={{ flex: '1 1 500px', padding: '3.5rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Subtle glow behind form */}
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '200px', height: '200px', background: 'var(--gradient-primary)', filter: 'blur(100px)', zIndex: -1, opacity: 0.2 }} />

          <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Send a message</h3>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="John Doe" required />
              </div>
              <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="john@example.com" required />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="input-field" placeholder="How can I help you?" required />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="input-field" placeholder="Write your message here..." rows={5} style={{ resize: 'none' }} required></textarea>
            </div>

            <button type="submit" disabled={isSending} className="btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1.125rem', opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}>
              {isSending ? 'Sending...' : <>Send Message <Send size={20} /></>}
            </button>

            {statusMsg.text && (
              <div style={{ 
                marginTop: '1rem', 
                padding: '1rem', 
                borderRadius: '12px', 
                textAlign: 'center',
                background: statusMsg.type === 'success' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: statusMsg.type === 'success' ? '#34d399' : '#ef4444',
                border: `1px solid ${statusMsg.type === 'success' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
              }}>
                {statusMsg.text}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
