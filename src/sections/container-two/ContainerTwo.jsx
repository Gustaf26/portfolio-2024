import ContainerTwoChildContext from './ContainerTwoChildContext.jsx'

import '../../assets/style.css'

import { useEffect, useState } from 'react';


const ContainerTwo = ({ secondItems }) => {


    const [style, setStyle] = useState({})

    return (
        <div style={{ ...style, height: 'fit-content', padding: '30px' }}>
            <ContainerTwoChildContext secondItems={secondItems} />
        </div>
    );
}

export default ContainerTwo