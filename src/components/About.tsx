import { motion } from 'framer-motion';
import { Database, Code2, LineChart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{
              flexShrink: 0,
              width: '140px',
              height: '140px',
              borderRadius: '24px',
              padding: '3px',
              background: 'var(--gradient-primary)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <img 
                src="/Pragati_Tiwari_Img.png" 
                alt="Pragati Tiwari"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Pragati Tiwari</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.125rem', marginBottom: '1rem' }}>Python Developer & Data Analyst</p>
              
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://github.com/pragati1102" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/pragati-tiwari-549364215/" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }}>
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            My journey in tech started with a fascination for numbers and patterns. Today, I use Python to turn raw data into actionable insights and scalable applications.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
            Whether it's building an ETL pipeline, training a predictive model, or developing a fast API backend, I focus on writing clean, efficient, and maintainable code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {[
            { icon: <Database className="text-gradient" size={32} />, title: 'Data Engineering', desc: 'Building robust pipelines to collect and clean data.' },
            { icon: <LineChart className="text-gradient" size={32} />, title: 'Data Analysis & ML', desc: 'Extracting insights and training predictive models.' },
            { icon: <Code2 className="text-gradient" size={32} />, title: 'Backend Development', desc: 'Serving models and data via robust APIs.' },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="glass-panel flex"
              style={{ padding: '1.5rem', gap: '1.5rem', alignItems: 'center' }}
              whileHover={{ x: 10, backgroundColor: 'var(--surface-hover)' }}
            >
              <div>{item.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
