// import { v4 as uuidv4 } from 'uuid';
import * as assets from '../../utils/assets-manager';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CreateEventSheet
    from "../../components/CreateEventSheet/CreateEventSheet";
import FloatingButton from "../../components/reusables/FloatingButton/FloatingButton";
import { userActions } from '../../redux/slices/user-slice';
import Timeline from '../../components/Timeline/Timeline';
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

    function handleOnCheckEvent(index, checked) {
        dispatcher(userActions.checkEvent({ index, isChecked: checked }));

    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <Timeline events={events} onCheckEvent={handleOnCheckEvent}/>

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