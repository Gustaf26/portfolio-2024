
import { useState, useEffect, useRef } from 'react';

import StyleContext from './contexts/StyleContext';

import './assets/style.css'

import About from './sections/container-one/About';
import Latest from './sections/container-one/Latest';
import Experience from './sections/container-one/Experience';
import Header from './components/Header';
import Skills from './sections/Skills.jsx';
import Testimonials from './sections/container-one/Testimonials.jsx';
import Education from './sections/container-one/Education'
import Footer from './components/Footer';
import Contact from './sections/Contact.jsx'

import { GithubContextProv } from './contexts/GithubContext.jsx';

import mail from './assets/images/email.png'
import GithubData from './sections/container-one/GithubData.jsx';

const App = () => {
  const [shadowSection, setShadowSection] = useState('')
  const offsetY = useRef(window.pageYOffset)
  const contactButtonRef = useRef()

  useEffect(() => {

    window.addEventListener('scroll', (e) => {

      if (window.pageYOffset < offsetY.current) {
        contactButtonRef.current.style.display = 'flex'
        contactButtonRef.current.style.animation = 'move-up-contact-button 0.5s linear forwards'
      }
      else {
        contactButtonRef.current.style.animation = 'move-down-contact-button 0.5s linear forwards'
      }

      offsetY.current = window.pageYOffset

    })
  }, [])

  return (
    <div style={{ height: 'fit-content' }}>
      <StyleContext.Provider value={{ shadowSection, setShadowSection }}>
        <Header />
        <Contact />
        <About />
        <div className="main-container">
          <div>
            <h2>Latest Projects</h2>
          </div>
          <Latest />
          <hr />
          <div
            id="git-and-skills-section">
            <div id="skills-container">
              <h2>Skills</h2>
              <Skills />
            </div>
            <hr />
            <div id="git-data-supra-container">
              <h2>Activity</h2>
              <GithubContextProv>
                <GithubData />
              </GithubContextProv>
            </div>
          </div>
          <hr />
          <div id="experience-and-education-container">
            <div id="experience-container">
              <h2>Work Experience</h2>
              <Experience key="experience" />
            </div>
            <hr />
            <div id="education-container">
              <h2>Education</h2>
              <Education />
            </div>
          </div>
          <div ref={contactButtonRef} id="contact-me-container">
            <button id="contact-me-button">
              <a href="mailto: gcs26@yahoo.com" target="">
                CONTACT ME</a>
              <img alt="send-email" src={mail} />
            </button>
          </div>
        </div>
      </StyleContext.Provider>
      <Testimonials />
      < Footer />
    </div>
  )
}

export default App
