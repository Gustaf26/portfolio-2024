
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

  const [items, setItems] = useState([<About key="about" />, <Latest key="latest" />, <Experience key="experience" />])
  const [secondItems, setSecondItems] = useState([<BasicInfo style={{ backgroundColor: 'white' }} key="basicInfo" />, <Skills key="skills" />, <Testimonials key="Testimonials" />, <Education key="Education" />, <Languages key="languages" />])

  const [containerItems, setContainerItems] = useState([])


  useEffect(() => {

    const randomKey1 = Math.floor(Math.random() * 100000)
    const randomKey2 = Math.floor(Math.random() * 100000)

    setContainerItems([<ContainerOne key={randomKey1} items={items} />,
    <ContainerTwo key={randomKey2} secondItems={secondItems} />])

  }, [])


  return (
    <>
      <StyleContext.Provider value={{ shadowSection, setShadowSection }}>
        <Header />
        <Contact />
        <div className="main-container sections-wrapper">
          <div className="row" >
            {containerItems && containerItems.map(item => {
              return item
            })}
          </div >
        </div>
        < Footer />
      </StyleContext.Provider>
    </>
  )
}

export default App
