
import { useState, useEffect, useRef } from 'react';

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
// import Footer from './components/Footer';
import Contact from './sections/Contact.jsx'

import { GithubContextProv } from './contexts/GithubContext.jsx';

import mail from './assets/images/email.png'
import GithubData from './sections/container-one/GithubData.jsx';

const App = () => {
  const [shadowSection, setShadowSection] = useState('')
  const [secondItems, setSecondItems] = useState([<BasicInfo style={{ backgroundColor: 'white' }} key="basicInfo" />, <Testimonials key="Testimonials" />, <Education key="Education" />, <Languages key="languages" />])

  // const skillsAndGitData = useRef()
  // const newScroll = useRef(1)
  // const lastScroll = useRef(0)
  // const direction = useRef('down')

  // const [opacityAnimation, setOpacityAnimation] = useState(false)

  // const checkAnimationChange = (lastScroll, newScroll, direction) => {

  //   let deviceHeight = window.innerHeight
  //   let percentRate = (deviceHeight / newScroll) * 100

  //   console.log(percentRate)

  //   if ((newScroll > 1950 && direction === 'down') || (newScroll < 3150 && direction === 'up')) setOpacityAnimation(true)
  //   else setOpacityAnimation(false)
  // }

  // useEffect(() => {

  //   window.addEventListener('scroll', (e) => {
  //     if (lastScroll.current < newScroll.current) {
  //       direction.current = 'down'
  //       lastScroll.current = newScroll.current
  //       newScroll.current = window.pageYOffset
  //       checkAnimationChange(lastScroll.current, newScroll.current, direction.current)
  //       return
  //     }
  //     else if (lastScroll.current > newScroll.current) {
  //       direction.current = 'up'
  //       lastScroll.current = newScroll.current
  //       newScroll.current = window.pageYOffset
  //       checkAnimationChange(lastScroll.current, newScroll.current, direction.current)
  //       return
  //     }
  //   })

  // }, [])

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
          <Experience key="experience" />
          {secondItems.length ? secondItems.map(item => item) : null}
          <button id="contact-me-button">
            <a href="mailto: gcs26@yahoo.com" target="">
              CONTACT ME</a>
            <img alt="send-email" src={mail} />
          </button>
        </div>
      </StyleContext.Provider>
      {/* < Footer /> */}
    </div>
  )
}

export default App
