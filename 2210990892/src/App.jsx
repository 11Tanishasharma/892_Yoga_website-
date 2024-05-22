import React from 'react'
import Navbar from "./components/navbar";
import Landing from './components/landing';
import Class from './components/class';
import Container from './components/container';
import Stats from './components/stats';
import Instructor from './components/instructor';
import Experience from './components/experience';
import Trainer from './components/trainer';
import Update from './components/update'
import Footer from './components/footer';
import Pricing from './components/pricing';

function App() {
  return (
    <div className='every overflow-x-hidden '>
    <Navbar />
    <Landing />
    <Class />
    <Container/>
    <Stats/>
    <Instructor/>
    <Experience/>
    <Pricing/>
    <Trainer/>
    <Update/>
    <Footer/>
    </div>

  )
}

export default App