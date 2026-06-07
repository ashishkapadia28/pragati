import { motion } from 'framer-motion';
import { 
  SiPython, SiMysql, SiTypescript, SiJavascript, 
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiFastapi, SiDjango, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiGit, SiApacheairflow, SiLinux,
  SiReact, SiVite, SiHtml5, SiTailwindcss
} from 'react-icons/si';
import { FaAws } from "react-icons/fa6";
import { FaBrain } from 'react-icons/fa';

const skillsData = [
  { 
    category: 'Languages', 
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
    ] 
  },
  { 
    category: 'Data & ML', 
    items: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'XGBoost', icon: FaBrain, color: '#1a9a1a' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' }
    ] 
  },
  { 
    category: 'Backend & DB', 
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' }
    ] 
  },
  { 
    category: 'Tools & Cloud', 
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Airflow', icon: SiApacheairflow, color: '#017CEE' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' }
    ] 
  },
  { 
    category: 'Frontend', 
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }
    ] 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <motion.div 
        className="glass-panel skills-panel" 
        style={{ padding: '1rem 3rem', borderRadius: '24px', marginTop: '3rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {skillsData.map((row, index) => (
          <div 
            key={index}
            className="skill-row"
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              padding: '2rem 0',
              borderBottom: index !== skillsData.length - 1 ? '1px solid var(--border-color)' : 'none',
              flexWrap: 'wrap',
              gap: '2rem'
            }}
          >
            {/* Category Name */}
            <div className="skill-category" style={{ flex: '0 0 250px' }}>
              <h3 className="skill-category-text" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700, letterSpacing: '0.5px' }}>
                {row.category}
              </h3>
            </div>

            {/* Icon Pills Marquee */}
            <div className="marquee-container" style={{ flex: 1, width: '100%' }}>
              <div className={`marquee-content ${index % 2 === 0 ? 'marquee-left' : 'marquee-right'}`}>
                {[...row.items, ...row.items, ...row.items, ...row.items].map((item, i) => (
                  <div 
                    key={i}
                    className="skill-pill"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      background: 'var(--bg-color)',
                      border: '1px solid var(--border-color)',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '99px',
                      transition: 'var(--transition)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-color)';
                      e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <item.icon className="skill-icon" size={20} color={item.color} />
                    <span className="skill-text" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
