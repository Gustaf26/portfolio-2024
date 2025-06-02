
import { useEffect, useState } from 'react';

import StyleContext from './contexts/StyleContext';

import './assets/style.css'

import ContainerOne from './sections/container-one/ContainerOne'
import ContainerTwo from './sections/container-two/ContainerTwo'
import About from './sections/container-one/About';
import Latest from './sections/container-one/Latest';
import Experience from './sections/container-one/Experience';
import Header from './components/Header';
import BasicInfo from './sections/container-two/BasicInfo';
import Skills from './sections/container-two/Skills';
import Testimonials from './sections/container-two/Testimonials';
import Education from './sections/container-two/Education';
import Languages from './sections/container-two/Languages';
import Footer from './components/Footer';
import Contact from './sections/Contact.jsx'



const App = () => {
  const [shadowSection, setShadowSection] = useState('')

  const [items, setItems] = useState([<Latest key="latest" />, <Experience key="experience" />])
  const [secondItems, setSecondItems] = useState([<BasicInfo style={{ backgroundColor: 'white' }} key="basicInfo" />, <Skills key="skills" />, <Testimonials key="Testimonials" />, <Education key="Education" />, <Languages key="languages" />])

  const [containerItems, setContainerItems] = useState([])


  useEffect(() => {

    const randomKey1 = Math.floor(Math.random() * 100000)
    const randomKey2 = Math.floor(Math.random() * 100000)

    setContainerItems([<ContainerOne key={randomKey1} items={items} />,
    <ContainerTwo key={randomKey2} secondItems={secondItems} />])

  }, [])


  return (
    <div style={{ height: 'fit-content' }}>
      <StyleContext.Provider value={{ shadowSection, setShadowSection }}>
        <Header />
        <Contact />
        <About />
        <div className="main-container sections-wrapper">
          <div >
            {containerItems && containerItems.map(item => {
              return item
            })}
          </div >

          <button id="contact-me-button">
            <a href="mailto: gcs26@yahoo.com" target="">
              CONTACT ME</a>
          </button>
        </div>
      </StyleContext.Provider>
      < Footer />
    </div>
  )
}

export default App
