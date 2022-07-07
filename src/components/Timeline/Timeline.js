import React, {useCallback, useEffect, useRef, useState} from 'react';
import EventDropZone from './EventDropZone/EventDropZone';
import Event from '../../components/reusables/Event/Event';
import { useDispatch } from "react-redux";
import { userActions } from '../../redux/slices/user-slice';


import styles from './Timeline.module.scss';


function Timeline(props) {
    const events = props.events ?? [];
    const dispatcher = useDispatch();
    const currentHoveredEventIndex = useRef(-1);
    const [currentEventClicked, setCurrentEventClicked] = useState(-1);

    const handleClickOutside = useCallback((ev, specifiedElement, setIsClicked) => {
        // console.log('clicking outside');
        if (specifiedElement) {
            const isClickInside = specifiedElement.contains(ev.target);

            if (!isClickInside) {
                setIsClicked?.(false);
                console.log('clicking outside:', currentHoveredEventIndex.current);
                currentHoveredEventIndex.current = -1;
                setCurrentEventClicked(currentEventClicked+1);
                // document.removeEventListener('click', handleClickOutside);
            }
        }

    }, [currentHoveredEventIndex, currentEventClicked, setCurrentEventClicked]);


    useEffect(() => {
        console.log('new position: ', currentHoveredEventIndex.current);
        

    }, [currentHoveredEventIndex]);

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
                           onClickUp={handleOnClickUp}
                           onClickDown={handleOnClickDown}
                           showMoveButtons={(currentHoveredEventIndex.current === index) ? true : false}
                           // showMoveButtons={(currentEventClicked === index) ? true : false}
                           onClick={handleOnClickEvent}
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
    function handleOnClickEvent(ev, eventIndex, eventElement, setIsClicked) {
        // add onClickOutside listener only on clicked element

        // remove old listener
        // setIsClicked?.(false);
        if(eventIndex >=0 ) {
            document.removeEventListener('click', (ev) => handleClickOutside(ev, eventElement, setIsClicked));
            document.addEventListener('click', (ev) => handleClickOutside(ev, eventElement, setIsClicked));

            //
            currentHoveredEventIndex.current = eventIndex;
        }

    }

    function handleOnClickUp(eventIndex) {
        const newPosition = eventIndex-1;
        const currentPosition = eventIndex;
        if (newPosition < 0) return;

        currentHoveredEventIndex.current = newPosition;

        dispatcher(userActions.moveEvent({ currentPosition, newPosition}));
        // setCurrentEventClicked(newPosition);
        // console.log('moving event from:', currentPosition, ' to: ', newPosition);
    }

    function handleOnClickDown(eventIndex) {
        const newPosition = eventIndex+1;
        const currentPosition = eventIndex;
        if (newPosition >= events.length) return;

        currentHoveredEventIndex.current = newPosition;

        dispatcher(userActions.moveEvent({ currentPosition, newPosition}));
        // setCurrentEventClicked(newPosition);
        // console.log('moving event from:', currentPosition, ' to: ', newPosition);

    }

    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));

    }

    function handleOnCheckEvent(index, checked) {
        props.onCheckEvent(index, checked);
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