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
            {events.map((event, index) =>
                <li key={event.id}>
                    {(index === 0) && <EventDropZone index={index} onDropped={handleOnDropped}/>}

                    <Event title={event.title}
                           color={event.color}
                           isCompleted={event.isCompleted}
                           time={event.time}
                           revealTime={event.revealTime}
                           index={index}
                           onCheckEvent={handleOnCheckEvent}
                           onClickUp={handleOnClickUp}
                           onClickDown={handleOnClickDown}
                           isForceSelect={(index === currentSelectedEventIndex.current) ? true : false}
                           // id={event.id}
                    />
                    <EventDropZone index={index + 1} onDropped={handleOnDropped}/>
                </li>
            )}
        </ul>
    );


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnClickUp(currentEventIndex, triggerUnselection) {
        if ( ! _positionIsValid(currentEventIndex - 1)) return;

        triggerUnselection();
        _moveEvent(currentEventIndex, currentEventIndex - 1)
    }

    function handleOnClickDown(currentEventIndex, triggerUnselection) {
        if ( ! _positionIsValid(currentEventIndex + 1)) return;

        triggerUnselection();
        _moveEvent(currentEventIndex, currentEventIndex + 1)
    }

    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));

    }

    function handleOnCheckEvent(index, checked) {
        props.onCheckEvent(index, checked);
    }

    function _moveEvent(from, to) {
        currentSelectedEventIndex.current = to;
        dispatcher(userActions.moveEvent({ from, to}));
    }

    function _positionIsValid(newPosition) {
        return newPosition >= 0 && newPosition < events.length;
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