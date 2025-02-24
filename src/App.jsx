
import './assets/style.css'

import { useEffect, useState, useRef } from 'react';

import { DndContext } from '@dnd-kit/core'
import {
  restrictToHorizontalAxis
} from '@dnd-kit/modifiers';

import StyleContext from './contexts/StyleContext';

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
  const [indexes, setIndexes] = useState([0, 1, 2])
  const [secondIndexes, setSecondIndexes] = useState([0, 1, 2, 3, 4])
  const [containerIndexes, setContainerIndexes] = useState([0, 1])
  const [activeId, setActiveId] = useState(null);
  const [secondActiveId, setSecondActiveId] = useState(null);
  const containerActiveId = useRef(null)

  const [items, setItems] = useState([<About key="about" />, <Latest key="latest" />, <Experience key="experience" />])
  const [secondItems, setSecondItems] = useState([<BasicInfo style={{ backgroundColor: 'white' }} key="basicInfo" />, <Skills key="skills" />, <Testimonials key="Testimonials" />, <Education key="Education" />, <Languages key="languages" />])
  const [containerItems, setContainerItems] = useState([])


  function handleContainerDragStart(event) {
    containerActiveId.current = event.active.id;

  }

  function handleContainerDragEnd(event) {
    let deltaX = event.delta.x

    if (deltaX > 0) {
      if (containerActiveId.current === 1) {
        setContainerIndexes([1, 0])
      }
      else {
        setContainerIndexes([0, 1])
      }
    }

    else {
      if (containerActiveId.current === 1) {
        setContainerIndexes([0, 1])
      }
      else {
        setContainerIndexes([1, 0])
      }
    }
  }


  function handleDragStart(event) {
    setActiveId(event.active.id);
    console.log(event)

  }

  function handleDragEnd(event) {

    let deltaY = event.delta.y
    let draggableFinalIndex;
    let contHeight = 1000

    let theIndexes = event.active.data.current.supports === 'type3' ?
      indexes :
      secondIndexes

    let newIndexes = [...theIndexes]

    if (deltaY < 0) {

      let diff = contHeight + deltaY

      theIndexes.forEach((ind, i) => {
        if (ind + 1 === activeId && event.active.data.current.supports === 'type3') {
          newIndexes.splice(i, 1)

          draggableFinalIndex = diff > 400 ? i - 2 : diff > 200 ? i - 1 : i
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
        else if (ind + 5 === secondActiveId && event.active.data.current.supports === 'type4') {


          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 900 ? i : diff > 600 ? i - 1 : diff > 500 ? i - 2 : diff > 400 ? i - 3 : i - 4

          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      if (event.active.data.current.supports === 'type3') {
        setIndexes(newIndexes)
      }
      else {

        setSecondIndexes(newIndexes)
      }
    }

    else {

      let diff = contHeight - deltaY

      theIndexes.forEach((ind, i) => {
        if (ind + 1 === activeId && event.active.data.current.supports === 'type3') {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 400 ? i : diff > 200 ? i + 1 : i + 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
        else if (ind + 4 === secondActiveId && event.active.data.current.supports === 'type4') {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 400 ? i : diff > 200 ? i + 1 : i + 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      if (event.active.data.current.supports === 'type3') {

        setIndexes(newIndexes)
      }
      else {
        setSecondIndexes(newIndexes)
      }
    }
  }

  const handleSecondStart = (event) => {
    setSecondActiveId(event.active.id);
  }

  useEffect(() => {

    const randomKey1 = Math.floor(Math.random() * 100000)
    const randomKey2 = Math.floor(Math.random() * 100000)

    if (containerIndexes.length > 0) {
      setContainerItems([<ContainerOne key={randomKey1} containerIndexes={containerIndexes} items={items} containerActiveId={containerActiveId} indexes={indexes} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />,
      <ContainerTwo key={randomKey2} ontainerIndexes={containerIndexes} containerActiveId={containerActiveId} handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} secondIndexes={secondIndexes} secondItems={secondItems} />
      ])
    }
  }, [containerIndexes, indexes, secondIndexes])

  useEffect(() => {
    setContainerItems([<ContainerOne key="containerOne" containerIndexes={containerIndexes} items={items} containerActiveId={containerActiveId} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} indexes={indexes} />,
    <ContainerTwo key="containertwo" containerIndexes={containerIndexes} containerActiveId={containerActiveId} handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} secondIndexes={secondIndexes} secondItems={secondItems} />])
  }, [])

  return (
    <>
      <StyleContext.Provider value={{ shadowSection, setShadowSection }}>
        <Header />
        <div className="main-container sections-wrapper">
          <div className="row" >
            {/* <DndContext modifiers={[restrictToHorizontalAxis]} onDragStart={handleContainerDragStart} onDragEnd={handleContainerDragEnd}> */}
            {containerIndexes && containerItems && containerIndexes.map(ind => {

              return containerItems[ind]
            }
            )}

            {/* </DndContext> */}
          </div >
        </div>
        < Footer />
      </StyleContext.Provider>
    </>
  )
}

export default App
