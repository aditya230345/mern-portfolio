
import { navLinks }  from "../portfolioData";

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo">
              Aditya<span className="gold">.</span>
            </div>
            <p>
              MERN Stack Developer dedicated to building modern, performant, 
              and beautiful web experiences. Let's create something great together.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Have a Question?</h4>
            <ul>
              <li>📍 Najafgarh, New Delhi</li>
              <li>📞 +91 7011890323</li>
              <li>
                ✉️{' '}
                <a href="mailto:aditya.k2883@gmail.com">aditya.k2883@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved — Made with ❤️ by{' '}
            <a href="#home" onClick={e => { e.preventDefault(); scrollTo('#home'); }}>Aditya</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
