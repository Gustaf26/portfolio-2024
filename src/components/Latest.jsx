import { useState } from 'react'
import subfeatured from '../data.js'
import like from "../assets/images/like.png"
// import minButik from "../assets/images/projects/min-butik.png"
import ecommerce from "../assets/images/projects/e-commerce.png"
import more_link from "../assets/images/foreign.png"

import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';


const SubFeatured = ({ info }) => {

    return (<div className="item">
        <a
            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
            target="">
            <img className="img-fluid project-image rounded shadow-sm"
                src={info.image} alt="project name" />
        </a>
        <div className="desc">
            <h3 className="title"><a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
                target="">{info.title}</a></h3>
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

    const [subfeaturedSecs, setSubFeatured] = useState(subfeatured);
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 2,
        data: {
            supports: 'type3',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };


    return (<section style={style} ref={setNodeRef} className="latest section" >
        <span className="drag-me">DRAG ME</span>
        <div {...listeners} {...attributes} className="section-inner shadow-sm rounded" >
            <h2 className="heading">Latest Projects</h2>
            <div className="item featured">
                <div className="featured-image has-ribbon">
                    <a href="https://e-commerce.catala-sverdrup.se" target="">
                        <img className="img-fluid project-image rounded shadow-sm"
                            src={ecommerce} alt="project name" />
                    </a>
                </div>

                <h3 className="title"><a href="https://min-butik.catala-sverdrup.se" target="">
                    E-commerce - CMS for retailers who want a flexible solution</a></h3>

                <div className="desc">
                    <p>Being this my examination project, it never saw the light of being actually used by retailers.
                        But the page was finnished with that purpose, even if it needs a better design</p>
                </div>
                <a className="btn" href="https://min-butik.catala-sverdrup.se"
                    target=""><img src={like} />Check</a>
            </div>
            <hr />
            <div className="secondary">
                {subfeaturedSecs && subfeaturedSecs.map(sec => {
                    return (<div key={sec.title} > <SubFeatured info={sec} /></div >)
                })}
            </div>
        </div>
    </section >)

}
export default Latest


