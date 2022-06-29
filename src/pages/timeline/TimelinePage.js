// import { v4 as uuidv4 } from 'uuid';
import Event from '../../components/reusables/Event/Event';
import * as assets from '../../utils/assets-manager';
import styles from './TimelinePage.module.scss';
import {useSelector} from "react-redux";


function TimelinePage(props) {
    const userData = useSelector(state => state.userSlice.userData);
    const events = userData.events ?? [];


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                {events.map(event =>(
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

            <button className={styles['timeline__btn-add']}>
                <assets.IconAdd className={styles['timeline__icon-add']}/>
            </button>

        </div>
    );
}// TimelinePage

export default TimelinePage;