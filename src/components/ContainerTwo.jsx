import { useDraggable } from '@dnd-kit/core'
import ContainerTwoChildContext from './ContainerTwoChildContext.jsx'
import { CSS } from '@dnd-kit/utilities';


import '../assets/style.css'

import { useEffect, useState } from 'react';


const ContainerTwo = ({ containerIndexes, containerActiveId, handleSecondStart, handleDragEnd, secondIndexes, secondItems }) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 2,
        data: {
            supports: 'type2',
        },
    });

    const [style, setStyle] = useState({})

    useEffect(() => {

        if (containerActiveId) {
            if (containerActiveId.current === 2) {
                setStyle({
                    transform: CSS.Translate.toString(transform),
                    zIndex: 3000
                })
            }
            else {
                setStyle({
                    transform: CSS.Translate.toString(transform),
                    zIndex: 0
                })
            }
        }

    }, [containerActiveId?.current, transform])

    // const style = {
    //     transform: CSS.Translate.toString(transform),
    //     zIndex: containerActiveId === 2 ? 3000 : 1
    // };
    return (
        <div style={{ ...style, height: 'fit-content', padding: '30px', backgroundColor: 'lightgrey' }} ref={setNodeRef}>
            <ContainerTwoChildContext containerIndexes={containerIndexes} listeners={{ ...listeners }} attributes={{ ...attributes }}
                secondItems={secondItems} secondIndexes={secondIndexes}
                handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} />
        </div>
    );
}

export default ContainerTwo