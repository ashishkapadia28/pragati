import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      background: 'rgba(0, 0, 0, 0.2)',
      padding: '4rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
        
        {/* Brand / Tagline */}
        <div style={{ flex: '1 1 300px' }}>
          <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--accent-color)' }}>{'>_'}</span> Pragati.dev
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '300px', lineHeight: 1.6 }}>
            Python Developer & Data Analyst. Turning complex data into actionable insights and scalable solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/pragati1102" target="_blank" rel="noreferrer" className="footer-icon">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pragati-tiwari-549364215/" target="_blank" rel="noreferrer" className="footer-icon">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:pragatitiwari1102@gmail.com" className="footer-icon">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li><a href="/#about" className="footer-link">About Me</a></li>
            <li><a href="/#projects" className="footer-link">Projects</a></li>
            <li><a href="/#skills" className="footer-link">Skills</a></li>
            <li><a href="/#resume" className="footer-link">Resume</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-secondary)' }}>
            <li>India</li>
            <li>pragatitiwari1102@gmail.com</li>
            <li style={{ color: 'var(--accent-color)', marginTop: '0.5rem' }}>Available for new opportunities.</li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {currentYear} Pragati Tiwari. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Designed with <span style={{ color: 'var(--accent-color)' }}>♥</span> and code.py
        </p>
      </div>

      <style>{`
        .footer-icon {
          color: var(--text-secondary);
          transition: var(--transition);
          display: inline-flex;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
        }
        .footer-icon:hover {
          color: var(--text-primary);
          border-color: var(--accent-color);
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
        }
        .footer-link:hover {
          color: var(--accent-color);
          padding-left: 5px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
