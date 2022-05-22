import BaseEvent from '../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../reusables/EventTime/EventTime';
import styles from './RangeEvent.module.scss';


function RangeEvent(props) {
    const color = props.color;
    const children = props.children;
    const title = props.title;


    let classesEvent = `${styles['event-range']} `;

    
    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}>
            <EventTime className={styles['event-range__time']} 
                       withAMPM={true}
                       withIndicator={true}> 06:00 </EventTime>

            <BaseEvent className={styles['event-range__header']} 
                   color={color}>{title}</BaseEvent>

            <ul className={styles['event-rage__children']}>
                {children}
            </ul>
        </div>
    );
}// RangeEvent

export default RangeEvent;