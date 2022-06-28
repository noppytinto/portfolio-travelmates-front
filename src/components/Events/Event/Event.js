import { v4 as uuidv4 } from 'uuid';
import RangeEvent from "../RangeEvent/RangeEvent";
import TimeEvent from "../TimeEvent/TimeEvent";
import BaseEvent from "../../reusables/BaseEvent/BaseEvent";
import styles from './Event.module.scss';

// for a specific time we can have more than 2
function Event(props) {
    const event = props.event;

    let eventComponent;
    if (event.starts && event.ends) {
        eventComponent = (
            <RangeEvent starts={event.starts} ends={event.ends} title={event.title} />
        );
    }
    else if (event.starts) {
        eventComponent = (
            <TimeEvent starts={event.starts} title={event.title} />
        );
    }
    else {
        eventComponent = (
            <BaseEvent title={event.title} />
        );
    }
    
    console.log(eventComponent);

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['event']}>
            <BaseEvent title={event.title} />
        </div>
    );
}// Event

export default Event;