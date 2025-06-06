import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';

import StyleContext from '../../contexts/StyleContext';

import { useContext } from 'react';

function Education() {


    const { shadowSection, setShadowSection } = useContext(StyleContext)

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 8,
        data: {
            supports: 'type4',
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (<aside onMouseOver={() => setShadowSection(6)} onMouseOut={() => setShadowSection('')}
        style={style} ref={setNodeRef} className={shadowSection === 6 ? "education aside shadow-lg section" : "education aside shadow-sm section"}>
        <div {...listeners} {...attributes} className="section-inner">
            <h2 className="heading">Education</h2>
            <div className="content">
                <div className="item">
                    <h3 className="title"><i className="fas fa-graduation-cap"></i> Frontend Development
                    </h3>
                    <h4 className="university">Medieinstitutet YH<span className="year"> (2019-2021)</span>
                    </h4>
                </div>
                <div className="item">
                    <h3 className="title"><i className="fas fa-graduation-cap"></i> Masters Degree Philosophy
                    </h3>
                    <h4 className="university">Universidad Complutense de Madrid<span className="year">
                        1992-1997</span></h4>
                </div>
            </div>
        </div>
    </aside>)
}
export default Education