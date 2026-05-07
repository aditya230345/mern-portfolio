const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual reveal">
            <div className="about-img-frame">👨‍🎓</div>
          </div>

          <div className="about-text reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning ideas into<br /><span className="gold">real-world products</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>
              I'm a MERN Stack Developer based in New Delhi, passionate about building 
              web applications that are fast, accessible, and genuinely useful. I love 
              clean code, great design, and solving hard problems.
            </p>

            <div className="info-grid">
              {[
                { key: 'Name', val: 'Aditya' },
                { key: 'Location', val: 'Najafgarh, New Delhi' },
                { key: 'Phone', val: '+91 7011890323' },
                { key: 'Email', val: 'aditya.k2883@gmail.com' },
                { key: 'Stack', val: 'MERN' },
                { key: 'Status', val: 'Open to Work ✅' },
              ].map(item => (
                <div className="info-item" key={item.key}>
                  <span className="key">{item.key}</span>
                  <span className="val">{item.val}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary"
              >
                Download CV ↓
              </a>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
