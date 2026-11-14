
import { useState, useEffect, useRef } from 'react';

import About from './sections/About.jsx';
import Latest from './sections/Latest.jsx';
import Experience from './sections/Experience.jsx';
import Header from './components/Header';
import Skills from './sections/Skills.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Education from './sections/Education.jsx'
import Footer from './components/Footer';
import Hero from './sections/Hero.jsx'

import { GithubContextProv } from './contexts/GithubContext.jsx';

import mail from './assets/images/email.png'
import Activity from './sections/Activity.jsx';

import StyleContext from './contexts/StyleContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import './assets/style.css'

const App = () => {

  const [shadowSection, setShadowSection] = useState('')

  const noContact = useRef(false)
  const offsetY = useRef(window.pageYOffset)
  const contactButtonRef = useRef()
  const mainContainerRef = useRef()

  const toggleContactButton = (action) => {

    if (action === 'move-down')
      contactButtonRef.current.style.animation = 'move-down-contact-button 0.5s linear forwards'
    else {
      if (noContact.current === false) {
        contactButtonRef.current.style.display = 'flex'
        contactButtonRef.current.style.animation = 'move-up-contact-button 0.5s linear forwards'
      }
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', (e) => {

      if (window.pageYOffset < offsetY.current) {
        toggleContactButton('move-up')
      }
      else {
        toggleContactButton('move-down')
      }

      offsetY.current = window.pageYOffset

    })

    const scrollToStart = () => mainContainerRef.current.scrollIntoView({ block: 'start' })

    scrollToStart()

  }, [])

  return (
    <div ref={mainContainerRef} style={{ height: 'fit-content' }}>
      <StyleContext.Provider value={{ shadowSection, setShadowSection }}>
        <Header />
        <Hero />
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
            <div id="activity-container">
              <h2>Activity</h2>
              <GithubContextProv>
                <Activity />
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
              <FontAwesomeIcon onClick={() => { noContact.current = true; toggleContactButton('move-down') }} icon={faClose} />
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
