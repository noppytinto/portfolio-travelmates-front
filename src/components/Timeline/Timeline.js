import React, {useRef} from 'react';
import EventDropZone from './EventDropZone/EventDropZone';
import Event from '../../components/reusables/Event/Event';
import { useDispatch } from "react-redux";
import { userActions } from '../../redux/slices/user-slice';
// import { v4 as uuidv4 } from 'uuid';

import styles from './Timeline.module.scss';


function Timeline(props) {
    const events = props.events ?? [];
    const dispatcher = useDispatch();
    const currentSelectedEventIndex = useRef(-1);


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <ul className={styles['timeline']}>
            {events.map((event, i) =>
                <li key={event.id}>
                    {(i === 0) && <EventDropZone index={i} onDropped={handleOnDropped}/>}

                    <Event {...arrangeProps(event, i)} />

                    <EventDropZone index={i + 1} onDropped={handleOnDropped}/>
                </li>
            )}
        </ul>
    );


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnClickUp(currentEventIndex, triggerUnselection) {
        if ( ! positionIsValid(currentEventIndex - 1)) return;

        triggerUnselection();
        moveEvent(currentEventIndex, currentEventIndex - 1)
    }

    function handleOnClickDown(currentEventIndex, triggerUnselection) {
        if ( ! positionIsValid(currentEventIndex + 1)) return;

        triggerUnselection();
        moveEvent(currentEventIndex, currentEventIndex + 1)
    }

    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));
    }

    function handleOnCheckEvent(index, checked) {
        props.onCheckEvent(index, checked);
    }

    function moveEvent(from, to) {
        currentSelectedEventIndex.current = to;
        dispatcher(userActions.moveEvent({ from, to }));
    }

    function positionIsValid(newPosition) {
        return (newPosition >= 0) && (newPosition < events.length);
    }

    function arrangeProps(event, index) {
        return {
            title: event.title,
            color: event.color,
            isCompleted: event.isCompleted,
            time: event.time,
            revealTime: event.revealTime,
            index: index,
            onCheckEvent: handleOnCheckEvent,
            onClickUp: handleOnClickUp,
            onClickDown: handleOnClickDown,
            isForceSelect: (index === currentSelectedEventIndex.current) ? true : false,
        }
    }

    // function handleDragEnd(event) {
    //     console.log('element dropped');
    //     // console.log(event.over?.id);
    //     console.log('from: ', event.active?.data?.current?.index);
    //     console.log('to: ', event.over?.data?.current?.index);

    //     // if (event.over && event.over.id === 'droppable') {
    //     //   console.log('element dropped');
    //     // }
    // }


}// 

export default Timeline;