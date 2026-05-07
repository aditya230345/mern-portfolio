import { resumeData } from '../portfolioData';

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
            A timeline of the milestones that shaped my development career.
          </p>
        </div>

        <div className="resume-grid">
          <div className="resume-col reveal">
            <h3><span>🎓</span> Education</h3>
            {resumeData.education.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-year">{item.year}</span>
                <h4>{item.degree}</h4>
                <div className="company">{item.school}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="resume-col reveal">
            <h3><span>💼</span> Experience</h3>
            {resumeData.experience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-year">{item.year}</span>
                <h4>{item.role}</h4>
                <div className="company">{item.company}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
