import { servicesData } from '../portfolioData';

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From pixel-perfect UIs to full-stack solutions — I deliver end-to-end web development services.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc, i) => (
            <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
