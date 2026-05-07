import { projectsData } from '../portfolioData';

const placeholderEmojis = ['🛠️', '🖥️', '🛒'];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A curated selection of projects that demonstrate my skills and approach to building.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <div className="project-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-thumb">
                {project.image
                  ? <img src={project.image} alt={project.title} loading="lazy" />
                  : placeholderEmojis[i]
                }
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span className="project-tag" key={j}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-link primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⚙️ GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
