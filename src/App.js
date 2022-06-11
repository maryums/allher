import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Connection from './components/Connection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">

        <Header />
        <Connection />
        <Services />
        <About />
      </div>
      <Footer />
    </>
  )
}

export default App