import styles from './ChildEvent.module.scss';
import BaseEvent from '../../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../../reusables/EventTime/EventTime';

function ChildEvent(props) {
    const title = props.title;
    const time = props.starts || props.ends || null; // this is a filling default value


    let classesChildEvent = `${styles['child-event']} `;

    const classesTime = (time) ?
        `${styles['child-event__time']} ` :
        `${styles['child-event__time']} ${styles['child-event__time--hidden']} `;

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesChildEvent}>
            <EventTime className={classesTime}
                       withAMPM={false}
                       valueTint="grey"
                       value={time} />

            <BaseEvent className={styles['child-event__header']}
                       title={title} />
        </div>
    );
}// ChildEvent

export default ChildEvent;