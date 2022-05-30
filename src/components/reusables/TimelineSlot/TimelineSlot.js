import styles from './TimelineSlot.module.scss';
import { v4 as uuidv4 } from 'uuid';
import EventTime from "../EventTime/EventTime";
import Event from "../../Events/Event/Event";

// for a specific time we can have more than 2
function TimelineSlot(props) {
    const starts = props.starts;
    const events = props.events ?? [];
    const TIMELINE_SPAN = 30; // minutes

    if (events.length > 0)  {
        // console.log(events);
        if (events[0].starts.getTime() === starts.getTime()) {
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
                        valueTint="grey-light-2" />

            <ul className={styles['timeline-slot__events']}>
                {
                    events.map(event => {
                        if (event.starts.getTime() === starts.getTime()) {
                            console.log('there is a header event');
                            return <li key={uuidv4()} className={styles['timeline-slot__event--header']}>
                                <Event event={event}/>
                            </li>
                        }

                        return <li key={uuidv4()}><Event event={event}/></li>
                    })
                }
            </ul>

        </div>
    );
}// TimelineSlot

export default TimelineSlot;