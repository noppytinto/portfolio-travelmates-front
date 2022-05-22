import styles from './ChildEvent.module.scss';
import BaseEvent from '../../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../../reusables/EventTime/EventTime';

function ChildEvent(props) {
    const title = props.title;
    const time = props.starts || props.ends || '99:99'; // this is a filling default value


    let classesChildEvent = `${styles['child-event']} `;

    const classesTime = (time==='99:99') ? 
        `${styles['child-event__time']} ${styles['child-event__time--hidden']}` :
        `${styles['child-event__time']}`;

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesChildEvent}>
            <EventTime className={classesTime}
                       withAMPM={false}
                       valueTint="grey"> {time} </EventTime>

            <BaseEvent className={styles['child-event__header']}
                       title={title} />
        </div>
    );
}// ChildEvent

export default ChildEvent;