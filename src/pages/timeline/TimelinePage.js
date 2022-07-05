// import { v4 as uuidv4 } from 'uuid';
import Event from '../../components/reusables/Event/Event';
import * as assets from '../../utils/assets-manager';
import {useSelector} from "react-redux";
import {useState} from "react";
import CreateEventSheet
    from "../../components/CreateEventSheet/CreateEventSheet";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import styles from './TimelinePage.module.scss';


function TimelinePage(props) {
    const userData = useSelector(state => state.userSlice.userData);
    const events = userData.events ?? [];
    const eventsArray = Array.from(events.values());
    const [showBottomSheet, setShowBottomSheet] = useState(false);


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleAddEventButton(ev) {
        // show bottom-sheet
        console.log('bottom sheet opened');
        setShowBottomSheet(!showBottomSheet);
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                {eventsArray.map(event => (
                    <li key={event.getId()}>
                        <Event title={event.title}
                               color={event.color}
                               isCompleted={event.isCompleted}
                               time={event.time}/>
                    </li>)
                )}
            </ul>

            <FloatingButton className={styles['timeline__btn-add']}
                            onClick={handleAddEventButton}>
                <assets.IconAdd className={styles['timeline__icon-add']}/>
            </FloatingButton>

            {showBottomSheet &&
                <CreateEventSheet
                    onClickOuside={() => setShowBottomSheet(false)}/>
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