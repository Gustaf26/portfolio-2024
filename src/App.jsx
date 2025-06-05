
import { useState } from 'react';

import StyleContext from './contexts/StyleContext';

import './assets/style.css'

import About from './sections/container-one/About';
import Latest from './sections/container-one/Latest';
import Experience from './sections/container-one/Experience';
import Header from './components/Header';
import BasicInfo from './sections/container-two/BasicInfo';
import Skills from './sections/Skills.jsx';
import Testimonials from './sections/container-two/Testimonials';
import Education from './sections/container-two/Education';
import Languages from './sections/container-two/Languages';
import Footer from './components/Footer';
import Contact from './sections/Contact.jsx'

import mail from './assets/images/email.png'


const App = () => {
  const [shadowSection, setShadowSection] = useState('')

  const [items, setItems] = useState([<Latest key="latest" />, <hr />, <Experience key="experience" />])
  const [secondItems, setSecondItems] = useState([<BasicInfo style={{ backgroundColor: 'white' }} key="basicInfo" />, <Testimonials key="Testimonials" />, <Education key="Education" />, <Languages key="languages" />])


  return (
    <div style={{ height: 'fit-content' }}>
      <StyleContext.Provider value={{ shadowSection, setShadowSection }}>
        <Header />
        <Contact />
        <About />
        <p><h2>Skills</h2></p>
        <Skills />
        <div className="main-container">
          <p><h2>Latest Projects</h2></p>
          {items.length ? items.map(item => item) : null}
          {secondItems.length ? secondItems.map(item => item) : null}
          <button id="contact-me-button">
            <a href="mailto: gcs26@yahoo.com" target="">
              CONTACT ME</a> <img alt="send-email" src={mail} />
          </button>
        </div>
      </StyleContext.Provider>
      {/* < Footer /> */}
    </div>
  )
}

export default App
