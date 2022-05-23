import BaseEvent from '../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../reusables/EventTime/EventTime';
import styles from './TimeEvent.module.scss';


function TimeEvent(props) {
    const color = props.color;
    const title = props.title;
    const starts = props.starts;


    let classesEvent = `${styles['time-event']} `;

    
    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}>
            <EventTime className={styles['time-event__time']} 
                       withAMPM={false}
                       withIndicator={true}
                       indicatorColor={color}
                       value={starts} />

            <BaseEvent className={styles['time-event__header']} 
                       title={title}
                       color={color} />

        </div>
    );
}// TimeEvent

export default TimeEvent;