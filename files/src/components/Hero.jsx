import { useEffect, useState } from 'react';

const roles = ['MERN Stack Developer', 'Crafting Scalable Web Solutions', 'Full Stack Developer', 'Modern Web Architect'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Available for hire</div>

            <h1 className="hero-name">
              Hi, I'm <span className="gold">Aditya</span><br />
            </h1>

            <div className="hero-role">
              {displayed}<span className="typed-cursor">|</span>
            </div>

            <p className="hero-desc">
              I craft high-performance web applications using the MERN stack — 
              turning ideas into fast, beautiful, and scalable digital products.
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => handleScroll('projects')}>
                View Projects ↗
              </button>
              <button className="btn btn-outline" onClick={() => handleScroll('contact')}>
                Hire Me
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="num">5+</span>
                <span className="lbl">Projects Done</span>
              </div>
              <div className="hero-stat">
                <span className="num">1+</span>
                <span className="lbl">Years Exp.</span>
              </div>
              <div className="hero-stat">
                <span className="num">10+</span>
                <span className="lbl">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-wrap">
              <div className="hero-avatar">👨‍💻</div>
              <div className="float-tag float-tag-1">
                <span>⚛️</span> React Developer
              </div>
              <div className="float-tag float-tag-2">
                <span>🟢</span> Node.js Expert
              </div>
              <div className="float-tag float-tag-3">
                <span>🍃</span> MongoDB Pro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
