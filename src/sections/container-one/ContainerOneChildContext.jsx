
import { useState } from 'react';



const ContainerOneChildContext = ({ items }) => {

    const [stylesClass, setStyleClass] = useState('')


    return (<div>
        <div style={{ padding: '30px' }} className={stylesClass} id="drag-container">
            {items && items.map((item) => { return item })
            }
        </div>
    </div>)
}

export default ContainerOneChildContext