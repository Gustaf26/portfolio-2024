

import { useContext, useEffect, useState } from 'react'
import StyleContext from '../contexts/StyleContext';



function About() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)
    const [verticalPoint, setVertical] = useState(0)

    useEffect(() => {

        document.addEventListener('scroll', (e) => {
            setVertical(e.target.offsetY)
        })
    }, [])



    return (
        <section onMouseOver={() => setShadowSection(0)} onMouseOut={() => setShadowSection('')}
            className={shadowSection === 0 ? "about shadow-lg section" : "about shadow-sm section"} >
            <div className="section-inner rounded" >
                <div className="content">
                    <p>Born in <span>Madrid</span>, I am an international developer with residence in Sweden who came to <span>Malmö</span> after living in
                        Madrid, Lund and Stockholm.<br></br>
                        I am a cosmopolitan, though my roots are both in <span>Sweden</span> and <span>Spain</span>. I am passionate about
                        languages, and working with web dev implies learning new (and old) programming languages
                        and making the best out of them.</p>
                </div>
            </div>
        </section>
    );
}
export default About