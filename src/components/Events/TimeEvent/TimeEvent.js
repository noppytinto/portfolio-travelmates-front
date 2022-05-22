import BaseEvent from '../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../reusables/EventTime/EventTime';
import styles from './TimeEvent.module.scss';


function TimeEvent(props) {
    const color = props.color;
    const title = props.children;


    let classesEvent = `${styles['time-event']} `;

    
    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}>
            <EventTime className={styles['time-event__time']} 
                       withAMPM={false}
                       withIndicator={true}> 06:00 </EventTime>

            <BaseEvent className={styles['time-event__header']} 
                   color={color}>{title}</BaseEvent>

        </div>
    );
}// TimeEvent

export default TimeEvent;