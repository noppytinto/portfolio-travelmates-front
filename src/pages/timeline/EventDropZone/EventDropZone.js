import React from 'react';
import { useDrop } from 'react-dnd';
import styles from './EventDropZone.module.scss';

export const ItemTypes = {
    EVENT: 'event'
};


function EventDropZone(props) {
    const index = props.index;

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.EVENT,
        drop: (monitor) => {handleDropItem(monitor.eventIndex, index)},
        canDrop: (monitor) => handleCanDrop(monitor.eventIndex, index),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }), [index]);

    const dropStyle = (isOver && canDrop) ? {
        backgroundColor: "#fff",
        opacity: "0.8",
        backgroundImage: "radial-gradient(circle at center center, #fff, #fff), repeating-radial-gradient(circle at center center, #FFE0B2, #FFE0B2, 10px, transparent 20px, transparent 10px)",
        backgroundBlendMode: "multiply",
    } : {};



    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleDropItem(currentPosition, newPosition) {
        props.onDropped(currentPosition, (currentPosition>newPosition) ? newPosition: newPosition-1);
    }
    

    function handleCanDrop(eventIndex, dropIndex) {
        return (dropIndex > eventIndex+1) || 
               (dropIndex < eventIndex);
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={`${styles['event-drop-zone']} ${props.className}`} 
             ref={drop} 
             style={dropStyle}/>
    );
}//

// export default EventDropZone;
export default React.memo(EventDropZone, (prev, next) => prev.index === next.index);