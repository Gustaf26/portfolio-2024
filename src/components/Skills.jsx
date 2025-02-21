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

    useEffect(() => {
        let dummyLevels = [90, 80, 70, 70, 70]
        let otherLevels = [0, 0, 0, 0, 0]
        let myInt = setInterval(() => {
            let newLevels = otherLevels.map((lev, i) => {
                if (otherLevels[i] == dummyLevels[i]) { return Number(lev) }
                else { return Number(lev) + 2 }
            })

            setLevels(newLevels)
            if (newLevels === dummyLevels) { console.log('Same levels'); clearInterval(myInt) }
            otherLevels = newLevels
        }, 100)

    }, [])

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
                                    <span className="progress-bar-value" ref={skillRefs[i]}
                                        style={{ backgroundColor: i === 0 ? 'lightblue' : "rgb(78, 102, 109)", width: skill.level + "%", borderRadius: '20px', height: '7px' }} id={skill.name}></span>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    </aside>)
}

export default Skills