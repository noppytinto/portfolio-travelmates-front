import styles from './EventSlot.module.scss';
import { v4 as uuidv4 } from 'uuid';

// for a specific time we can have more than 2
function EventSlot(props) {
    const TIME_SPAN = 30; // minutes

    // events of the same time value
    const events = props.events ?? [];


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                {events.map(event => <li key={uuidv4()}>{event}</li>)}
            </ul>

        </div>
    );
}// EventSlot

export default EventSlot;