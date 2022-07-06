import React from 'react';
import EventDropZone from './EventDropZone/EventDropZone';
import Event from '../../components/reusables/Event/Event';

import {
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
  import {pointerWithin, rectIntersection, closestCenter} from '@dnd-kit/core';

import styles from './Timeline.module.scss';
function Timeline(props) {
    const events = props.events ?? [];
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const sensors = useSensors(
        mouseSensor,
        touchSensor,
      );

    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        // dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));

    }

    function handleOnCheckEvent(index, checked) {
        props.onCheckEvent(index, checked);
    }

    function isTouchDevice() {
        return true;
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCenter}>
        <ul className={styles['timeline']}>
                    {events.map((event, index) => {
                        console.log('title: ', event.title, ' index: ', index);
                        return (
                        <li key={index}>
                            {(index === 0) && <EventDropZone index={index} onDropped={handleOnDropped} />}
                            <Event title={event.title}
                                color={event.color}
                                isCompleted={event.isCompleted}
                                time={event.time}
                                index={index} 
                                onCheckEvent={handleOnCheckEvent}
                                />
                            <EventDropZone index={index + 1} onDropped={handleOnDropped} />
                        </li>)}
                    )}
                </ul>
                </DndContext>
    );


  
    function handleDragEnd(event) {
        console.log('element dropped');
        // console.log(event.over?.id);
        console.log('from: ',event.active?.data?.current?.index);
        console.log('to: ',event.over?.data?.current?.index);

        // if (event.over && event.over.id === 'droppable') {
        //   console.log('element dropped');
        // }
      }
}// 

export default Timeline;