
import { useEffect, useState } from 'react';

import StyleContext from './contexts/StyleContext';

import './assets/style.css'

import ContainerOne from './components/ContainerOne'
import ContainerTwo from './components/ContainerTwo'
import About from './components/About';
import Latest from './components/Latest';
import Experience from './components/Experience';
import Header from './Header';
import BasicInfo from './components/BasicInfo';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './Footer';



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
