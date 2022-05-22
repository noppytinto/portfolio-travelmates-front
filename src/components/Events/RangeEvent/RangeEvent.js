import BaseEvent from '../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../reusables/EventTime/EventTime';
import styles from './RangeEvent.module.scss';


function RangeEvent(props) {
    const color = props.color;
    const children = props.children;
    const title = props.title;


    let classesEventTime = `${styles['range-event__time']} `;
    let classesEventTimeStart = `${classesEventTime} ${styles['range-event__time--start']} `;
    let classesEventTimeEnd = `${classesEventTime} ${styles['range-event__time--end']} `;

    let classesEvent = `${styles['range-event']} `;
    switch (color) {
        case 'orange': 
            classesEvent += styles['range-event--orange'];
            break;
        case 'blue': 
            classesEvent += styles['range-event--blue'];
            break;
        case 'green': 
            classesEvent += styles['range-event--green'];
            break;
        case 'red': 
            classesEvent += styles['range-event--red'];
            break;
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}>
            <EventTime className={classesEventTimeStart} 
                       withAMPM
                       withIndicator
                       color={color}> 06:00 </EventTime>

            <BaseEvent className={styles['range-event__header']} 
                       title={title} 
                       color={color} />

            <ul className={styles['range-event__children']}>
                {children}
            </ul>

            <EventTime className={classesEventTimeEnd} 
                       withAMPM
                       withIndicator
                       color={color}> 07:30 </EventTime>
        </div>
    );
}// RangeEvent

export default RangeEvent;