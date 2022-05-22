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
                <li><TimeEvent title="time event" color="orange" /></li>
                <li><BaseEvent title="timeless event" color="orange" /></li>
                <li><RangeEvent title="range event" color="orange" ></RangeEvent></li>
            </ul>

        </div>
    );
}// Timeline

export default Timeline;