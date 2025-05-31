import { useEffect, useState } from 'react'
import ContainerOneChildContext from './ContainerOneChildContext'
import '../assets/style.css'

const ContainerOne = ({ items }) => {

    const [style, setStyle] = useState({})

    return (
        <div style={{ ...style, height: 'fit-content', padding: '30px', backgroundColor: 'lightgrey' }}>
            <ContainerOneChildContext
                items={items} />
        </div>
    );
}

export default ContainerOne