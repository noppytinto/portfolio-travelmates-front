import EventRange from '../../components/EventRange/EventRange';
import Event from '../../components/reusables/Event/Event';
import styles from './Timeline.module.scss';


function Timeline(props) {




    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                <li>
                    <Event color="orange">event 1</Event>
                </li>
                <li>
                    <EventRange color="orange" title="event 2"></EventRange>
                </li>
            </ul>

        </div>
    );
}// Timeline

export default Timeline;