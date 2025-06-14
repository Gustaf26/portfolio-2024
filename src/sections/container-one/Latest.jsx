import { useState, useContext, useRef, useEffect, useLayoutEffect } from 'react'
import projects from '../../data/data.js'
import StyleContext from '../../contexts/StyleContext.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'


const SubFeatured = ({ info, changeFeaturedItem }) => {

    const [hovered, setHovered] = useState(false)


    useEffect(() => {

        info.project.showingDesc ? setHovered(true) : setHovered(false)

    }, [info.project.showingDesc])

    return (<div onMouseOver={() => !info.project.showingDesc ? setHovered(true) : setHovered(hovered)}
        onMouseOut={() => setHovered(false)}
        id={'item-' + (info.i + 1)} className={info.i === 0 ? "item featured" : info.i === 1 || info.i === 3 ? 'item middle-item not-featured' :
            'item last-item not-featured'}>
        {info.i === 0 ? <h3 className="title">{info.project.title}</h3> : null}
        <a className="featured-img-container"
            href="#"
            target="_blank" onClick={(e) => e.preventDefault()}>
            <img className={info.i === 0 ? "featured-img img-fluid project-image rounded shadow-sm" : "img-fluid project-image rounded shadow-sm"}
                src={info.project.image} alt="project name" />

            {info.i !== 0 ? <div id="more-info-button">
                <FontAwesomeIcon icon={faEye} onClick={(e) => { e.preventDefault(); changeFeaturedItem(info.i) }} />
            </div> : null}

        </a>
        {info?.i === 0 && info.project.showingDesc === true && hovered ? < div className="featured-desc animated">
            <FontAwesomeIcon onClick={(e) => { e.stopPropagation(); setHovered(false) }} icon={faClose} />
            <p>{info.project.description}</p>
            <p><a
                href={info.project.more_link?.href}
                target="">See Project</a>
            </p>
        </div> : info.i === 0 && !hovered ? (
            < div className="featured-desc"><FontAwesomeIcon className="arrow-up"
                onClick={(e) => { e.stopPropagation(); setHovered(true) }} icon={faUpLong} /></div>)
            : null
        }
    </div >
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

    const scrollToFeatured = () => {
        document.getElementById('item-1').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    const setDescriptionShowing = (dummyProjects) => {

        let allProjs = dummyProjects.map((proj, i) => { (i === 0 ? proj.showingDesc = true : proj.showingDesc = false); return proj })
        setProjects(allProjs)
    }

    const rotate = (e) => {

        if (e) { e.target.classList.add('rotated'); scrollToFeatured() }
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
            setDescriptionShowing(dummyProjects)
        }, 500)

    }

    const changeFeaturedItem = (index) => {
        rotationIcon.current.classList.add('rotated')

        let allProjimages = [...document.querySelectorAll('.featured-img')]

        allProjimages.forEach(image => {
            image.classList.remove('scaling')
        })

        let dummyProjects = []
        let chosenProject = sectionProjects[index]

        let otherProjects = sectionProjects.filter(proj => proj !== chosenProject)

        dummyProjects = [chosenProject, ...otherProjects]

        setTimeout(() => {
            setProjects(dummyProjects)
            allProjimages.forEach(image => {
                image.classList.add('scaling')
            });
        }, 300)

        setTimeout(() => {
            rotationIcon.current.classList.remove('rotated');
            scrollToFeatured()
            setDescriptionShowing(dummyProjects)
        }, 500)

    }

    return (<section onMouseOver={() => { setRotating(false); setShadowSection(1) }} onMouseOut={() => { setRotating(true); setShadowSection('') }}
        className="projects section" >
        <button id="rotate-projects-button" >
            <FontAwesomeIcon ref={rotationIcon} onClick={rotate} icon={faRotate} />
        </button>
        {sectionProjects && sectionProjects.map((project, i) => {
            return (<SubFeatured key={'project' + i} changeFeaturedItem={changeFeaturedItem} info={{ project, i }} />)
        })}
    </section >)

}
export default Latest


