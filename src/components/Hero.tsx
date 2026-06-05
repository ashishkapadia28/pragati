import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundGradient = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 240, 255, 0.12), transparent 80%)`;
  const backgroundGradientAlt = useMotionTemplate`radial-gradient(500px circle at ${springX}px ${springY}px, rgba(112, 0, 255, 0.1), transparent 80%)`;

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '100px', // account for navbar
        position: 'relative',
        overflow: 'hidden'
      }}
      className="container"
    >
      {/* Interactive Background Glows */}
      <motion.div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: backgroundGradient, pointerEvents: 'none', zIndex: 0 }} 
      />
      <motion.div 
        style={{ position: 'fixed', top: '100px', left: '100px', right: 0, bottom: 0, background: backgroundGradientAlt, pointerEvents: 'none', zIndex: 0 }} 
      />

      {/* Static fallback orbs for non-moving parts */}
      <div className="glow-orb" style={{ top: '20%', left: '10%', width: '30vw', height: '30vw', background: 'var(--accent-color)', opacity: 0.2 }} />
      <div className="glow-orb" style={{ bottom: '10%', right: '10%', width: '30vw', height: '30vw', background: 'var(--accent-color-alt)', animationDelay: '-5s', opacity: 0.2 }} />

      <div style={{ maxWidth: '900px', zIndex: 1, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 1rem', 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '99px',
            marginBottom: '2rem'
          }}
        >
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></span>
          <span className="mono" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Code is read much more often than it is written</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}
        >
          Hi, I'm <span className="text-gradient">Pragati Tiwari</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '2.5rem', fontWeight: 500 }}
        >
          Python Developer & Data Analyst.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-p"
          style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto 3.5rem' }}
        >
          I specialize in extracting powerful insights from complex datasets and building robust, scalable backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="/Pragati_Tiwari_Resume.pdf" download className="btn-primary">
            <Download size={20} /> Download Resume
          </a>
          <a href="#projects" className="btn-outline">
            View Projects <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
