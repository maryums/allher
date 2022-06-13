import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Connection from './components/Connection'
import Footer from './components/Footer'
import Events from './components/Events';

const App = () => {

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>

          <Route path="/" element={<Header />} />
          <Route path="/mission" element={<Connection />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />

        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App