import { useState } from 'react'

const ContainerTwoChildContext = ({ secondItems }) => {

    const [stylesClass, setStyleClass] = useState('')


    return (<div >
        <div style={{ padding: '30px' }} className={stylesClass} id="aside-sections" >
            {secondItems && secondItems.map((ind) => { return ind })
            }
        </div>
    </div>)
}

export default ContainerTwoChildContext