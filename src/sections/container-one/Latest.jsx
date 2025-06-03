import { useState, useContext } from 'react'
import subfeatured from '../../data/data.js'
import StyleContext from '../../contexts/StyleContext.jsx'
import ecommerce from "../../assets/images/projects/mobile.png"
import more_link from "../../assets/images/foreign.png"



const SubFeatured = ({ info }) => {

    return (<div className="item">
        <a
            href={info.more_link.href}
            target="_blank">
            <img className="img-fluid project-image rounded shadow-sm"
                src={info.image} alt="project name" />
        </a>
        <div className="desc">
            <h3 className="title"><a
                href={info.more_link.href}
                target="_blank">{info.title}</a></h3>
            <p>{info.description}</p>
            <p><a className="more-link"
                href={info.more_link.href}
                target=""><img className="external-link"
                    src={more_link} />Find out more</a></p>
        </div>
    </div>
    )
}



function Latest() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)
    const [subfeaturedSecs, setSubFeatured] = useState(subfeatured);


    return (<section onMouseOver={() => setShadowSection(1)} onMouseOut={() => setShadowSection('')}
        className={shadowSection === 1 ? "latest shadow-lg section" : "latest shadow-sm section"} >
        <h2 className="heading">Latest Projects</h2>
        <div className="item featured">
            <a href="https://e-commerce.catala-sverdrup.se" target="">
                <img className="img-fluid project-image rounded shadow-sm"
                    src={ecommerce} alt="project name" />
            </a>
            <div className="featured-info">
                <h3 className="title"><a href="https://min-butik.catala-sverdrup.se" target="">
                    E-commerce - CMS for retailers who want a flexible solution</a></h3>

                <div className="desc">
                    <p>Being this my examination project, it never saw the light of being actually used by retailers.
                        But the page was finnished with that purpose, even if it needs a better design</p>
                </div>
                <a className="btn" href="https://e-commerce.catala-sverdrup.se"
                    target="">VIEW</a>
            </div>
        </div>
        <hr />
        {/* <div className="secondary">
            {subfeaturedSecs && subfeaturedSecs.map(sec => {
                return (<div key={sec.title} > <SubFeatured info={sec} /></div >)
            })}
        </div> */}
    </section >)

}
export default Latest


