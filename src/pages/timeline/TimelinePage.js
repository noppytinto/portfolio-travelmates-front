// import { v4 as uuidv4 } from 'uuid';
import Event from '../../components/reusables/Event/Event';
import * as assets from '../../utils/assets-manager';
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import Link from "next/link";
import styles from './TimelinePage.module.scss';


function TimelinePage(props) {
    const router = useRouter();
    const userData = useSelector(state => state.userSlice.userData);
    const events = userData.events ?? [];
    const eventsArray = Array.from(events.values());




    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleAddEventButton(ev) {
        // router.push('/event/add');
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

            <Link href={'/event/add'}>
                <a className={styles['timeline__btn-add']}>
                    <assets.IconAdd className={styles['timeline__icon-add']}/>
                </a>
            </Link>


        </div>
    );
}// TimelinePage



export default TimelinePage;