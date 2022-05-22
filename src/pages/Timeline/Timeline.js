import ChildEvent from '../../components/Events/RangeEvent/ChildEvent/ChildEvent';
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
                <li><TimeEvent title="time event" starts="05:30" color="blue" /></li>
                <li><BaseEvent title="timeless event" color="green" /></li>
                <li><RangeEvent title="range event" color="orange" starts="06:00" ends="08:30">
                        <ChildEvent title="child time event 1" starts="06:30"/>
                        <ChildEvent title="child timeless event " />
                        <ChildEvent title="child time event 2" ends="08:30"/>
                    </RangeEvent></li>
            </ul>

        </div>
    );
}// Timeline

export default Timeline;