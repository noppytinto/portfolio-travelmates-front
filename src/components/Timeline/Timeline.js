import React from 'react';
import EventDropZone from './EventDropZone/EventDropZone';
import Event from '../../components/reusables/Event/Event';
import { useDispatch } from "react-redux";
import { userActions } from '../../redux/slices/user-slice';


import styles from './Timeline.module.scss';


function Timeline(props) {
    const events = props.events ?? [];
    const dispatcher = useDispatch();



    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <ul className={styles['timeline']}>
            {events.map((event, index) =>
                <li key={index}>
                    {(index === 0) && <EventDropZone index={index}
                                                     onDropped={handleOnDropped}/>}
                    <Event title={event.title}
                           color={event.color}
                           isCompleted={event.isCompleted}
                           time={event.time}
                           index={index}
                           onCheckEvent={handleOnCheckEvent}
                    />
                    <EventDropZone index={index + 1}
                                   onDropped={handleOnDropped}/>
                </li>
            )}
        </ul>
    );


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));

    }

    function handleOnCheckEvent(index, checked) {
        props.onCheckEvent(index, checked);
    }

    function isTouchDevice() {
        return true;
    }

    function handleDragEnd(event) {
        console.log('element dropped');
        // console.log(event.over?.id);
        console.log('from: ', event.active?.data?.current?.index);
        console.log('to: ', event.over?.data?.current?.index);

        // if (event.over && event.over.id === 'droppable') {
        //   console.log('element dropped');
        // }
    }
}// 

export default Timeline;