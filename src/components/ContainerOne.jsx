import { useDraggable } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import ContainerOneChildContext from './ContainerOneChildContext'
import { CSS } from '@dnd-kit/utilities';

import '../assets/style.css'

const ContainerOne = ({ containerIndexes, items, containerActiveId, handleDragStart, handleDragEnd, indexes }) => {

    console.log(containerIndexes)
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 1,
        data: {
            supports: 'type1',
        },
    });


    const [style, setStyle] = useState({})

    useEffect(() => {

        if (containerActiveId) {

            if (containerActiveId?.current === 1) {
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

    return (
        <div style={{ ...style, height: 'fit-content', padding: '30px', backgroundColor: 'lightgrey' }} ref={setNodeRef}>
            <ContainerOneChildContext containerIndexes={containerIndexes} listeners={{ ...listeners }} attributes={{ ...attributes }}
                items={items} indexes={indexes} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
        </div>
    );
}

export default ContainerOne