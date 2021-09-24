import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Agent from './components/Agent';
import Properties from './components/Properties';
import ScrollToTop from './components/ScrolTop';


const House = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <AboutDetails />
            <Agent />
            <Properties />
            <ScrollToTop />
        </>
    )
}

export default House
