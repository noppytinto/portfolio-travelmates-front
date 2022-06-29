// import { v4 as uuidv4 } from 'uuid';
import Event from '../../components/reusables/Event/Event';
import EventBuilder from "../../models/EventBuilder";

import styles from './TimelinePage.module.scss';


function TimelinePage(props) {
    let id = 0;
    const event_1 = new EventBuilder(id++, 'event 1')
        .setTime(new Date(1970, 0, 1, 0, 0))
        .build();
    const event_2 = new EventBuilder(id++,'event 2')
        .setTime(new Date(1970, 0, 1, 0, 10))
        .build();

    const event_3 = new EventBuilder(id++,'event 3')
        .setTime(new Date(1970, 0, 1, 0, 15))
        .build();

    const event_4 = new EventBuilder(id++,'event 4')
        .setTime(new Date(1970, 0, 1, 0, 35))
        .build();

    const event_5 = new EventBuilder(id++,'event 5')
        .setTime(new Date(1970, 0, 1, 1, 12))
        .build();

    const events = [];
    events.push(event_1);
    events.push(event_2);
    events.push(event_3);
    events.push(event_4);
    events.push(event_5);



    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                {events.map(event =>(
                    <li key={event.getId()}>
                        <Event title={event.title}
                               color={event.color}
                               isCompleted={event.isCompleted}
                               time={event.time}
                        />
                    </li>)
                )
                }
            </ul>

        </div>
    );
}// TimelinePage

export default TimelinePage;