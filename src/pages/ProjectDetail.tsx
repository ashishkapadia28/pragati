import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container section" style={{ textAlign: 'center', paddingTop: '120px', minHeight: '100vh' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '2rem' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section" 
      style={{ paddingTop: '120px', minHeight: '100vh' }}
    >
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
        <ArrowLeft size={20} /> Back to Home
      </Link>

      {project.imageUrl && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-panel"
          style={{ 
            width: '100%', 
            height: '40vh', 
            minHeight: '300px', 
            maxHeight: '500px', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            marginBottom: '3rem',
            padding: 0
          }}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </motion.div>
      )}

      <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: -1,
        }} />

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}
        >
          {project.title}
        </motion.h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '3rem' }}>
          {project.brief}
        </p>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Overview</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {project.description}
            </p>
          </div>
          
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Technologies Used</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">
                  <FaGithub size={20} /> Repository
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
