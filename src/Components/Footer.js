import React from 'react';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="developer">
          Desarrollado por Ains89
        </div>
        <div className="contact-info">
          Contacto: <a href="mailto:correo@example.com">correo@example.com</a>
        </div>
        <div className="social-media">
          Redes Sociales:
          <ul>
            <li><a href="https://www.facebook.com/jeferson.lopezmartinez1?mibextid=ZbWKwL">Facebook</a></li>
            <li><a href="https://x.com/jackass040789?t=Hnps5vlpU2jePYhxOJg9Ag&s=09">Twitter</a></li>
            <li><a href="https://instagram.com/jefer040789?igshid=NGVhN2U2NjQ0Yg==">Instagram</a></li>
          </ul>
        </div>
        <div className="origin">
          País de origen: Colombia, Medellín
        </div>
        <div className="current-date">
          Fecha actual: {new Date().toLocaleDateString()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;