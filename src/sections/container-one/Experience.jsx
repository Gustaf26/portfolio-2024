
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';
import { useContext } from 'react';
import StyleContext from '../../contexts/StyleContext';


function Experience() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)

    const workExperience = [{
        title: "Web development Instructor",
        company: "Skta Maria Folkhögskola",
        description: `Instructing adults in web dev main technologies for modern web applications (in forntend and backend) using SQL and noSQL databases. 
        Leading online courses and teaching adults how to code`
        , period: `(2021 - Present)`
    },
    {
        title: "Intern",
        company: "Cirk-l Workwear",
        description: `At Cirkl I learned to work with Wordpress and take advantage of its API for frontend requests to the backend. 
        It was my own idea to use it and make communication through URL params as well. Cirkl sold an own product for working clothes.`
        , period: `(jan - apr 2021)`
    },
    {
        title: "Intern",
        company: "Stjärnstoft Studios",
        description: `Stjärnstoft was all about games, so the UI needed some functionality adapted to the gaming world. In the period I was at Stjärnstoft
        I learned to work agile in teams and take ownership of my own features. Using react was a great choice that made integration easier.`
        , period: `(oct - dec 2020)`
    }];

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 3,
        data: {
            supports: 'type3',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <section onMouseOver={() => setShadowSection(2)} onMouseOut={() => setShadowSection('')}
            style={style} ref={setNodeRef} className={shadowSection === 2 ? "experience shadow-lg section" : "experience shadow-sm section"}>
            {/* <span className="drag-me">DRAG ME</span> */}
            <div {...listeners} {...attributes}>
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    {workExperience.map(exp => {
                        return (
                            <div key={exp.company} className="item">
                                <h3 className="title">
                                    {exp.title}
                                    <span className="place">{exp.company}</span>

                                </h3>
                                <span className="year">{exp.period}</span>
                                <p>{exp.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience