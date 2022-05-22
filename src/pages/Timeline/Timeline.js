import RangeEvent from '../../components/Events/RangeEvent/RangeEvent';
import TimeEvent from '../../components/Events/TimeEvent/TimeEvent';
import BaseEvent from '../../components/reusables/BaseEvent/BaseEvent';
import styles from './Timeline.module.scss';


function Timeline(props) {



    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                <li><TimeEvent color="orange">time event</TimeEvent></li>
                <li><BaseEvent color="orange">timeless event</BaseEvent></li>
                <li><RangeEvent color="orange" title="event 2"></RangeEvent></li>
            </ul>

        </div>
    );
}// Timeline

export default Timeline;