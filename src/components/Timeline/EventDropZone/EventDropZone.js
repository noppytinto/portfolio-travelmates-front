import React, {useState} from 'react';
import styles from './EventDropZone.module.scss';
import {useSelector} from "react-redux";



function EventDropZone(props) {
    const currentDropZoneIndex = props.index;
    const [isDragOver, setIsDragOver] = useState(false);
    const eventIndex = useSelector(state => state.dragAndDropSlice.eventIndex);

    const dropStyle = (isDragOver) ? {
        backgroundColor: "#fff",
        opacity: "0.8",
        backgroundImage: "radial-gradient(circle at center center, #fff, #fff), repeating-radial-gradient(circle at center center, #FFE0B2, #FFE0B2, 10px, transparent 20px, transparent 10px)",
        backgroundBlendMode: "multiply",
    } : null;




    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={`${styles['event-drop-zone']} ${props.className}`}
             onDragOver={handleDragOver}
             onDrop={handleOnDrop}
             onDragEnter={handleOnDragEnter}
             onDragLeave={handleOnDragLeave}
             style={dropStyle}

             />
    );


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleDropItem(currentPosition, newPosition) {
    }


    function handleCanDrop(eventIndex, dropIndex) {
        // return (dropIndex > eventIndex+1) ||
        //        (dropIndex < eventIndex);
    }

    function handleDragOver(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        // set dropEffect to copy i.e copy of the source item
        ev.dataTransfer.dropEffect = "move";

    }

    function handleOnDragEnter(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        if ( ! _canDrag(eventIndex, currentDropZoneIndex)) return;

        console.log('drag entered');
        setIsDragOver(true);
    }

    function handleOnDragLeave(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        if ( ! _canDrag(eventIndex, currentDropZoneIndex)) return;

        console.log('drag left');
        setIsDragOver(false);
    }

    function handleOnDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        if ( ! _canDrag(eventIndex, currentDropZoneIndex)) return;


        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/plain");
        console.log('dropped from:', data, ' to: ', currentDropZoneIndex);
        setIsDragOver(false);


        props.onDropped(eventIndex, (eventIndex>currentDropZoneIndex) ? currentDropZoneIndex: currentDropZoneIndex-1);

    }

    function _canDrag(from, to) {
        if (to === from) return false;
        if (to === from+1) return false;

        return true;
    }
}//

// export default EventDropZone;
export default React.memo(EventDropZone, (prev, next) => prev.index === next.index);