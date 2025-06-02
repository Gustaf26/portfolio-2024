import { useState } from 'react'
import ContainerOneChildContext from './ContainerOneChildContext'
import '../../assets/style.css'


const ContainerOne = ({ items }) => {

    const [style, setStyle] = useState({})

    return (
        <div style={{ ...style, height: 'fit-content' }}>
            <ContainerOneChildContext
                items={items} />
        </div>
    );
}

export default ContainerOne