import { useState, useContext } from 'react'
import projects from '../../data/data.js'
import StyleContext from '../../contexts/StyleContext.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'


const SubFeatured = ({ info }) => {

    return (<div id={'item-' + (info.i + 1)} className={info.i === 0 ? "item featured" : info.i === 1 || info.i === 3 ? 'item middle-item' : 'item last-item'}>
        <a
            href={info.sec.more_link.href}
            target="_blank">
            <img className="img-fluid project-image rounded shadow-sm"
                src={info.sec.image} alt="project name" />
        </a>
        <div className="desc">
            {/* <h3 className="title"><a
                href={info.sec.more_link.href}
                target="_blank">{info.sec.title}</a></h3> */}
            {/* <p>{info.sec.description}</p> */}
            {/* <p><a className="more-link"
                href={info.sec.more_link.href}
                target="">Find out more</a>
            </p> */}
        </div>
    </div>
    )
}


function Latest() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)
    const [sectionProjects, setProjects] = useState(projects)

    const rotate = (e) => {

        e.target.classList.add('rotated')

        let dummyProjects = []
        sectionProjects.forEach((project, i) => {
            i === 3 ? dummyProjects[0] = project : dummyProjects[i + 1] = project
        })

        setProjects(dummyProjects)

        setTimeout(() => {
            e.target.classList.remove('rotated')
        }, 500)
    }

    return (<section onMouseOver={() => setShadowSection(1)} onMouseOut={() => setShadowSection('')}
        className="projects section" >
        <button id="rotate-projects-button" >
            <FontAwesomeIcon onClick={rotate} icon={faRotate} />
        </button>
        {sectionProjects && sectionProjects.map((sec, i) => {
            return (<SubFeatured info={{ sec, i }} />)
        })}
    </section >)

}
export default Latest


