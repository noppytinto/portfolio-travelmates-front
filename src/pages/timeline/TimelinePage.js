// import { v4 as uuidv4 } from 'uuid';
import Event from '../../components/reusables/Event/Event';
import * as assets from '../../utils/assets-manager';
import {useSelector} from "react-redux";
import {useState} from "react";
import styles from './TimelinePage.module.scss';
import BottomSheet from "../../components/reusables/BottomSheet/BottomSheet";
import CreateEventSheet
    from "../../components/CreateEventSheet/CreateEventSheet";


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
                {eventsArray.map(event =>(
                    <li key={event.getId()}>
                        <Event title={event.title}
                               color={event.color}
                               isCompleted={event.isCompleted}
                               time={event.time}
                        />
                    </li>)
                )
                }
            </ul>

            <button className={styles['timeline__btn-add']}
                    onClick={handleAddEventButton}>
                <assets.IconAdd className={styles['timeline__icon-add']}/>
            </button>

            {showBottomSheet &&
                <CreateEventSheet onClickOuside={() => setShowBottomSheet(false)} />
            }
        </div>
    );
}// TimelinePage



export default TimelinePage;