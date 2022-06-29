import * as assets from '../../../utils/assets-manager';
import styles from './TimelinePage.module.scss';
import {useSelector} from "react-redux";
import {useRouter} from "next/router";


function EditEventPage(props) {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = useSelector(state => state.userSlice.events.get(eventId));

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['event-page']}>
            <p>{event.name}</p>
        </div>
    );
}// EditEventPage



export default EditEventPage;