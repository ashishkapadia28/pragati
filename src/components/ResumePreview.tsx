import { motion } from 'framer-motion';

const ResumePreview = () => {
  return (
    <section id="resume" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="glass-panel"
        style={{ overflow: 'hidden', padding: 0 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Browser Window Header */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          <div className="mono" style={{ margin: '0 auto', fontSize: '0.875rem', color: 'var(--text-muted)', transform: 'translateX(-36px)' }}>
            Pragati_Tiwari_Resume.pdf
          </div>
        </div>

        {/* PDF Content */}
        <div style={{ height: '80vh', minHeight: '600px', width: '100%', background: '#fff' }}>
          <iframe 
            src="/Pragati_Tiwari_Resume.pdf#toolbar=0" 
            title="Resume Preview"
            width="100%" 
            height="100%"
            style={{ border: 'none' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Your browser does not support PDFs.</p>
              <a href="/Pragati_Tiwari_Resume.pdf" download className="btn-primary">
                Download Resume PDF
              </a>
            </div>
          </iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumePreview;
