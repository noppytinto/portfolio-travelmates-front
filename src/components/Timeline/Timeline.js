import React, {useRef} from 'react';
import EventDropZone from './EventDropZone/EventDropZone';
import Event from '../../components/reusables/Event/Event';
import { useDispatch } from "react-redux";
import { userActions } from '../../redux/slices/user-slice';
import {isMobile} from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';


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
    function handleOnClickUp(eventIndex) {
        const newPosition = eventIndex-1;
        const currentPosition = eventIndex;
        if (newPosition < 0) return;

        currentSelectedEventIndex.current = newPosition;

        dispatcher(userActions.moveEvent({ currentPosition, newPosition}));
    }

    function handleOnClickDown(eventIndex) {
        const newPosition = eventIndex+1;
        const currentPosition = eventIndex;
        if (newPosition >= events.length) return;

        currentSelectedEventIndex.current = newPosition;

        dispatcher(userActions.moveEvent({ currentPosition, newPosition}));
    }

    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));

    }

    function handleOnCheckEvent(index, checked) {
        props.onCheckEvent(index, checked);
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