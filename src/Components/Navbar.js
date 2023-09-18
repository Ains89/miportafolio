
import React from 'react';

const Navbar = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-right">
        <a href="#encabezado"onClick={scrollToFooter} >Inicio</a>
        <a href="#about" onClick={scrollToFooter} >Sobre mí</a>
        <a href="#tarjeta" onClick={scrollToFooter} >Proyectos</a>
        <a href="#footer-container" onClick={scrollToFooter}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;







