import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

import { useContext } from 'react'
import StyleContext from '../contexts/StyleContext';



function About() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 1,
        data: {
            supports: 'type3',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <section onMouseOver={() => setShadowSection(0)} onMouseOut={() => setShadowSection('')}
            style={style} ref={setNodeRef} className={shadowSection === 0 ? "about shadow-lg section" : "about shadow-sm section"} >
            {/* <span className="drag-me">DRAG ME</span> */}
            <div className="section-inner rounded" >
                <h2 className="heading"> About Me </h2>
                <div {...listeners} {...attributes} className="content">
                    <p>I am an international developer with residence in Sweden who came to Malmö after living in
                        Madrid, Lund and Stockholm.
                        I am a cosmopolitan, though my roots are both in Sweden and Spain. I am passionate about
                        languages, and working with web dev implies learning new (and old) programming languages
                        and making the best out of them.</p>
                </div>
            </div>
        </section>
    );
}
export default About