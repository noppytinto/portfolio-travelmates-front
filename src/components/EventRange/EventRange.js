import Event from '../reusables/Event/Event';
import EventTime from '../reusables/EventTime/EventTime';
import styles from './EventRange.module.scss';


function EventRange(props) {
    const color = props.color;
    const children = props.children;
    const title = props.title;


    let classesEvent = `${styles['event-range']} `;

    return (
        <div className={classesEvent}>
            <EventTime className={styles['event-range__time']} 
                       withAMPM={false}> 06:00 </EventTime>

            <Event className={styles['event-range__header']} 
                   color={color}>{title}</Event>

            <ul className={styles['event-rage__children']}>
                {children}
            </ul>
        </div>
    );
}// EventRange

export default EventRange;