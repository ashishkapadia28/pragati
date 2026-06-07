import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'fixed', top: '2rem', zIndex: 100 }}>
      <motion.nav 
        className="nav-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          padding: '0.75rem 1.5rem 0.75rem 1rem',
          background: 'rgba(20, 20, 25, 0.7)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '99px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '99px' }}>
          <Terminal size={20} color="var(--accent-color)" />
          <span className="mono" style={{ color: 'var(--text-primary)' }}>Pragati.dev</span>
        </Link>

        <ul className="desktop-nav" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Projects</a></li>
          <li><a href="#resume" onClick={(e) => handleNavClick(e, 'resume')} style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Resume</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Skills</a></li>
        </ul>

        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn-primary desktop-btn" style={{ padding: '0.5rem 1.25rem', fontSize: '0.95rem', gap: '0.5rem' }}>
          Let's Talk
        </a>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '110%',
              left: '1.25rem',
              right: '1.25rem',
              background: 'rgba(20, 20, 25, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              zIndex: 99
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={{ display: 'block', fontWeight: 500, fontSize: '1.1rem', color: 'var(--text-primary)', padding: '0.5rem' }}>About</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} style={{ display: 'block', fontWeight: 500, fontSize: '1.1rem', color: 'var(--text-primary)', padding: '0.5rem' }}>Projects</a></li>
              <li><a href="#resume" onClick={(e) => handleNavClick(e, 'resume')} style={{ display: 'block', fontWeight: 500, fontSize: '1.1rem', color: 'var(--text-primary)', padding: '0.5rem' }}>Resume</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} style={{ display: 'block', fontWeight: 500, fontSize: '1.1rem', color: 'var(--text-primary)', padding: '0.5rem' }}>Skills</a></li>
            </ul>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn-primary" style={{ width: '100%', padding: '0.8rem', justifyContent: 'center' }}>
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
