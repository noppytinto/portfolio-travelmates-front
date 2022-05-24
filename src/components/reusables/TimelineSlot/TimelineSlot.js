import styles from './TimelineSlot.module.scss';
import { v4 as uuidv4 } from 'uuid';
import EventTime from "../EventTime/EventTime";

// for a specific time we can have more than 2
function TimelineSlot(props) {
    const starts = props.starts;
    const eventSlots = props.eventSlots ?? [];
    const TIMELINE_SPAN = 30; // minutes

    if (eventSlots.length > 0)  {
        if (eventSlots[0].starts === starts) {
            console.log('there is a header event');
        }
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline-slot']}>
            <EventTime  className={styles['timeline-slot__time']}
                        value={starts}
                        valueTint="grey-light" />

        </div>
    );
}// TimelineSlot

export default TimelineSlot;