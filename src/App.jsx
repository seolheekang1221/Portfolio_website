import React from 'react'
import Demo from './components/demo/Demo'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolios from './components/portfolios/Portfolios'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
    return (
        <>
            <Demo />
            <Header />
            <Nav />
            <About />
            <Portfolios />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
};

export default App;