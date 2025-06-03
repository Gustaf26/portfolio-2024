import { useRef, useState, useEffect, useContext } from 'react'


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
                    if (i === 0) levelsShining[i].style.background = `linear-gradient(to right, rgb(241, 211, 241) ${10 - lev}%, white ${lev}%, rgb(241, 211, 241) 100%)`

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
                        levelsShining[i].style.background = i === 0 ? 'rgb(241, 211, 241)' : 'rgb(78, 102, 109)'
                    })
                    clearInterval(myInt)
                }
                otherLevels = newLevels
            }, 100)
        }
    }, [levelsLoaded])



    const skills = [{ name: "Javascript", level: levels[0], ref: skillRefs[0] },
    { name: "Python", level: levels[1], ref: skillRefs[1] },
    { name: "HTML/CSS", level: levels[2], ref: skillRefs[2] },
    { name: "SQL/NoSQL", level: levels[3], ref: skillRefs[3] },
    { name: "React", level: levels[4], ref: skillRefs[4] }]



    return (<aside onMouseOver={() => setShadowSection(4)} onMouseOut={() => setShadowSection('')}
        className={shadowSection === 4 ? "skills aside shadow-lg section" : "skills aside shadow-sm section"}>
        <div className="section-inner">
            <div className="content">
                <div id="skillset" className="skillset">
                    {skills.map((skill, i) => {
                        return (
                            <div key={skill.name} className="item">
                                <h3 className="level-title">{skill.name}</h3>
                                <div className="level-bar progress" style={{ zIndex: 10, height: '4px' }}>
                                    <span className="shining-prog progress-bar-value" ref={skillRefs[i]}
                                        style={{
                                            background: i === 0 ? 'rgb(241, 211, 241)' : 'rgb(78, 102, 109)',
                                            width: skill.level + "%", borderRadius: '20px', height: '7px'
                                        }} id={skill.name}></span>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    </aside>)
}

export default Skills