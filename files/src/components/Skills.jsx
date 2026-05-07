import { useEffect, useRef, useState } from 'react';
import { skillsData } from '../portfolioData';

const techBadges = [
  { label: 'MongoDB', icon: '🍃' },
  { label: 'Express.js', icon: '🔧' },
  { label: 'React.js', icon: '⚛️' },
  { label: 'Node.js', icon: '🟢' },
  { label: 'Redux', icon: '🔄' },
  { label: 'REST APIs', icon: '🌐' },
  { label: 'Git & GitHub', icon: '🐙' },
  { label: 'Tailwind CSS', icon: '💨' },
  { label: 'Bootstrap', icon: '🅱️' },
  { label: 'Postman', icon: '📮' },
  { label: 'VS Code', icon: '💻' },
  { label: 'Figma', icon: '🎨' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">My Abilities</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tools and technologies I use to bring products from concept to launch.
          </p>
        </div>

        <div className="skills-inner">
          <div className="skills-bars reveal">
            {skillsData.map((skill, i) => (
              <div className="skill-item" key={i}>
                <div className="skill-meta">
                  <span className="skill-name">
                    <span>{skill.icon}</span> {skill.name}
                  </span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-bar"
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>
              Tech Stack & Tools
            </h3>
            <div className="tech-badges">
              {techBadges.map((b, i) => (
                <div className="badge" key={i}>
                  <span>{b.icon}</span> {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
