import styles from './TimeEvent.module.scss';
import BaseEvent from '../../reusables/BaseEvent/BaseEvent';
import EventTime from '../../reusables/EventTime/EventTime';
import PropTypes from 'prop-types';

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

TimeEvent.propTypes = {
    color: PropTypes.oneOf(['', 'orange', 'blue', 'green', 'red']),
    title: PropTypes.string,
    starts: PropTypes.instanceOf(Date),
}

export default TimeEvent;