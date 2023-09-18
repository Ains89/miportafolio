import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Proyectos from './Components/Proyectos'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Proyectos />
      <About />
      <Footer />
    </div>
  );
};

export default App;
