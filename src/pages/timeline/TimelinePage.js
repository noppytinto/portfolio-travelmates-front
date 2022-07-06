// import { v4 as uuidv4 } from 'uuid';
import Event from '../../components/reusables/Event/Event';
import * as assets from '../../utils/assets-manager';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CreateEventSheet
    from "../../components/CreateEventSheet/CreateEventSheet";
import FloatingButton from "../../components/reusables/FloatingButton/FloatingButton";
import { userActions } from '../../redux/slices/user-slice';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import EventDropZone from './EventDropZone/EventDropZone';
import styles from './TimelinePage.module.scss';



function TimelinePage(props) {
    const dispatcher = useDispatch();
    const userData = useSelector(state => state.userSlice.userData);
    const events = userData.events ?? [];
    const [showBottomSheet, setShowBottomSheet] = useState(false);




    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleAddEventButton(ev) {
        // show bottom-sheet
        console.log('bottom sheet opened');
        setShowBottomSheet(!showBottomSheet);
    }

    function handleOnClickCreateEvent(ev, createdEvent) {
        console.log('event created:', createdEvent);
        dispatcher(userActions.addEvent({ newEvent: createdEvent }));
        setShowBottomSheet(false);
    }

    function handleOnDropped(currentPosition, newPosition) {
        console.log('moving from:', currentPosition, ' to:', newPosition);
        dispatcher(userActions.moveEvent({ currentPosition, newPosition, }));

    }




    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <DndProvider backend={HTML5Backend}>

                <ul className={styles['timeline__content']}>
                    {events.map((event, index) => {
                        console.log('title: ', event.title, ' index: ', index);
                        return (
                        <li key={index}>
                            {(index === 0) && <EventDropZone index={index} onDropped={handleOnDropped} />}
                            <Event title={event.title}
                                color={event.color}
                                isCompleted={event.isCompleted}
                                time={event.time}
                                index={index} />
                            <EventDropZone index={index + 1} onDropped={handleOnDropped} />
                        </li>)}
                    )}
                </ul>
            </DndProvider>

            <FloatingButton className={styles['timeline__btn-add']}
                onClick={handleAddEventButton}>
                <assets.IconAdd className={styles['timeline__icon-add']} />
            </FloatingButton>

            {showBottomSheet &&
                <CreateEventSheet onClickOutside={() => setShowBottomSheet(false)}
                    onClickCancel={() => setShowBottomSheet(false)}
                    onClickCreateEvent={handleOnClickCreateEvent}
                />
            }
        </div>

    );
}// TimelinePage

/*
">0.2%",
"not dead",
"not op_mini all",
*/


export default TimelinePage;