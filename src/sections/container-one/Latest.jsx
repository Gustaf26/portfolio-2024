import { useState, useContext, useRef, useEffect } from 'react'
import projects from '../../data/data.js'
import StyleContext from '../../contexts/StyleContext.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'


const SubFeatured = ({ info, rotate }) => {

    const [hovered, setHovered] = useState(false)

    return (<div onMouseOver={() => info.i === 0 ? setHovered(true) : null} onMouseOut={() => info.i === 0 ? setHovered(false) : null}
        id={'item-' + (info.i + 1)} className={info.i === 0 ? "item featured" : info.i === 1 || info.i === 3 ? 'item middle-item' : 'item last-item'}>
        <a
            href={info.sec.more_link.href}
            target="_blank">
            {info.i === 0 ? <h3 className="title">{info.sec.title}</h3> : null}
            <img className={info.i === 0 ? "featured-img img-fluid project-image rounded shadow-sm" : "img-fluid project-image rounded shadow-sm"}
                src={info.sec.image} alt="project name" />
        </a>
        {hovered ? <div className="featured-desc">
            <p>{info.sec.description}</p>
            <p><a
                href={info.sec.more_link.href}
                target="">See Project</a>
            </p>
        </div> : null}
    </div>
    )
}


function Latest() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)
    const [sectionProjects, setProjects] = useState(projects)
    const [rotating, setRotating] = useState(true)
    const rotationIcon = useRef()

    useEffect(() => {

        let rotation = setInterval(() => { rotate('') }, 8000);
        if (!rotating) clearInterval(rotation)

        return function () { clearInterval(rotation) }

    }, [sectionProjects, rotating])

    const rotate = (e) => {

        if (e) e.target.classList.add('rotated')
        else { rotationIcon.current.classList.add('rotated') }

        let allProjimages = [...document.querySelectorAll('.featured-img')]

        allProjimages.forEach(image => {
            image.classList.remove('scaling')
        })

        let dummyProjects = []
        sectionProjects.forEach((project, i) => {
            i === 3 ? dummyProjects[0] = project : dummyProjects[i + 1] = project
        })

        setTimeout(() => {
            setProjects(dummyProjects)
            allProjimages.forEach(image => {
                image.classList.add('scaling')
            });
        }, 300)

        setTimeout(() => {
            e ? e.target.classList.remove('rotated') : rotationIcon.current.classList.remove('rotated')
        }, 500)

    }

    return (<section onMouseOver={() => { setRotating(false); setShadowSection(1) }} onMouseOut={() => { setRotating(true); setShadowSection('') }}
        className="projects section" >
        <button id="rotate-projects-button" >
            <FontAwesomeIcon ref={rotationIcon} onClick={rotate} icon={faRotate} />
        </button>
        {sectionProjects && sectionProjects.map((sec, i) => {
            return (<SubFeatured key={'project' + i} info={{ sec, i }} />)
        })}
    </section >)

}
export default Latest


