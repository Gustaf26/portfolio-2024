import starimg from '../../assets/images/star.png'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

import StyleContext from '../../contexts/StyleContext';

import { useContext } from 'react';
function Languages() {

    const { shadowSection, setShadowSection } = useContext(StyleContext)
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 9,
        data: {
            supports: 'type4',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    const languages = [{ name: "Spanish", description: "Native Spaeaker", level: 5 },
    { name: "Swedish", description: "Professional Proficency", level: 4 },
    { name: "English", description: "Professional Proficency", level: 4 },
    { name: "German", description: "Deep understanding", level: 3 },
    ]

    return (<aside onMouseOver={() => setShadowSection(7)} onMouseOut={() => setShadowSection('')}
        style={style} ref={setNodeRef} className={shadowSection === 7 ? "languages aside shadow-lg section" : "languages aside shadow-sm section"}>
        <div className="section-inner" {...listeners} {...attributes}>
            <h2 className="heading">Languages</h2>
            <div className="content">
                <ul id="language-list" className="list-unstyled">
                    {languages.map((lang, i) => {
                        return (<li key={i + 'lang'} id={i.toString()} className="lang-item">
                            <div>
                                <span className="title"><strong>{lang.name}:</strong></span>
                                {[...Array(lang.level)].map((element, i) => {
                                    return (<img key={i + 'star'} style={{ width: "20px", height: "20px" }}
                                        src={starimg} />)
                                })
                                }</div>
                            <p className="level">{lang.description}<br className="visible-xs" /></p>
                        </li >)
                    })}
                </ul>
            </div>
        </div>
    </aside>)
}

export default Languages