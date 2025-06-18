

import StyleContext from '../../contexts/StyleContext';

import { useContext } from 'react';

function Education() {


    const { shadowSection, setShadowSection } = useContext(StyleContext)

    return (<section onMouseOver={() => setShadowSection(6)} onMouseOut={() => setShadowSection('')}
        className={shadowSection === 6 ? "education aside shadow-lg section content-container" : "education aside shadow-sm section content-container"}>
        <div className="section-inner">
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
    </section>)
}
export default Education