import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              padding: '1.5rem', 
              borderRadius: '24px',
              height: '100%'
            }}
            whileHover={{ y: -8, borderColor: 'var(--accent-color)' }}
          >
            {/* Simple Clean Image Block */}
            {project.imageUrl && (
              <div style={{ 
                width: '100%', 
                height: '220px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            )}

            {/* Content Block */}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              {project.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', flexGrow: 1 }}>
              {project.brief}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.technologies.slice(0, 4).map(tech => (
                <span 
                  key={tech} 
                  className="mono" 
                  style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-primary)', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '8px',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
              <Link to={`/project/${project.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.95rem' }}>
                View Project <ArrowRight size={16} />
              </Link>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <FaGithub size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
