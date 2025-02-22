import { useRef, useState, useEffect, useContext } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

import StyleContext from '../contexts/StyleContext';

function Skills() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)

    const [skillRefs, setskillRefs] = useState([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ])

    const [levels, setLevels] = useState([0, 0, 0, 0, 0])
    const [levelsLoaded, setLoaded] = useState(false)

    useEffect(() => {
        let dummyLevels = [90, 80, 70, 70, 70]
        let otherLevels = [0, 0, 0, 0, 0]
        let myInt = setInterval(() => {
            let newLevels = otherLevels.map((lev, i) => {
                if (otherLevels[i] == dummyLevels[i]) { return Number(lev) }
                else { return Number(lev) + 2 }
            })

            setLevels(newLevels)
            let allSame = false
            const compareArrays = () => {
                let sameOnes = 0
                dummyLevels.forEach((level, i) => {
                    newLevels.forEach((lev, j) => {
                        if (lev === level && i == j) {
                            sameOnes += 1
                        }
                    })
                    allSame = sameOnes === newLevels.length ? true : false
                })
                return allSame
            }
            if (compareArrays()) { console.log('Same levels'); setLoaded(true); clearInterval(myInt) }
            otherLevels = newLevels
        }, 100)

    }, [])

    useEffect(() => {
        let dummyLevels = [90, 80, 70, 70, 70]
        let otherLevels = [0, 0, 0, 0, 0]

        let levelsShining = [...document.querySelectorAll('.shining-prog')]

        levelsShining.forEach((lev, i) => {
            lev.style.backgroundPosition = `0px 50%`
        })

        if (levelsLoaded) {
            // console.log(levelsLoaded)
            let myInt = setInterval(() => {
                let newLevels = otherLevels.map((lev, i) => {
                    if (i === 0) levelsShining[i].style.background = `linear-gradient(to right, lightblue ${10 - lev}%, white ${lev}%, lightblue 100%)`

                    if (otherLevels[i] == dummyLevels[i]) { return Number(lev) }
                    else { return Number(lev) + 5 }
                })
                let allSame = false
                const compareArrays = () => {
                    let sameOnes = 0
                    for (let i = 0; i < dummyLevels.length; i++) {
                        for (let j = 0; j < newLevels.length; j++) {
                            if (dummyLevels[i] === newLevels[j] && i == j) {
                                sameOnes += 1
                                break
                            }
                        }
                        allSame = sameOnes === newLevels.length ? true : false
                    }
                    return allSame
                }
                if (compareArrays()) {
                    console.log('Same dummy levels');
                    newLevels.forEach((lev, i) => {
                        // console.log(levelsShining[i])
                        // levelsShining[i].style.width = `${Number(lev) * 5}px`
                        levelsShining[i].style.background = i === 0 ? 'lightblue' : 'rgb(78, 102, 109)'
                    })
                    clearInterval(myInt)
                }
                otherLevels = newLevels
            }, 100)
        }
    }, [levelsLoaded])

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 6,
        data: {
            supports: 'type4',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    const skills = [{ name: "Javascript", level: levels[0], ref: skillRefs[0] },
    { name: "Python", level: levels[1], ref: skillRefs[1] },
    { name: "HTML/CSS", level: levels[2], ref: skillRefs[2] },
    { name: "SQL/NoSQL", level: levels[3], ref: skillRefs[3] },
    { name: "React", level: levels[4], ref: skillRefs[4] }]



    return (<aside onMouseOver={() => setShadowSection(4)} onMouseOut={() => setShadowSection('')}
        style={style} ref={setNodeRef} className={shadowSection === 4 ? "skills aside shadow-lg section" : "skills aside shadow-sm section"}>
        <div {...listeners} {...attributes} className="section-inner">
            <h2 className="heading">Skills</h2>
            <div className="content">
                <div id="skillset" className="skillset">
                    {skills.map((skill, i) => {
                        return (
                            <div key={skill.name} className="item">
                                <h3 className="level-title">{skill.name}</h3>
                                <div className="level-bar progress" style={{ zIndex: 10, height: '7px' }}>
                                    <span className="shining-prog progress-bar-value" ref={skillRefs[i]}
                                        style={{
                                            // backgroundSize: '20px',
                                            // backgroundPosition: !levelsLoaded && '0px 0px',
                                            background: i === 0 ? 'lightblue' : 'rgb(78, 102, 109)',

                                            width: skill.level + "%", borderRadius: '20px', height: '7px'
                                        }} id={skill.name}></span>
                                    {/* <a style={{
                                        zIndex: 10, height: '7px',
                                        background: i === 0 ? 'linear-gradient(to right, lightblue 20%, #FFF 40%, #FFF 60%, lightblue 80%)'
                                            : "linear-gradient(to right, rgb(78, 102, 109) 20%, #FFF 40%, #FFF 60%,rgb(78, 102, 109)  80%)",
                                    }} className="shining-prog"></a> */}
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    </aside>)
}

export default Skills