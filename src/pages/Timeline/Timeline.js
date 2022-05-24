import styles from './Timeline.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ChildEvent from '../../components/Events/RangeEvent/ChildEvent/ChildEvent';
import RangeEvent from '../../components/Events/RangeEvent/RangeEvent';
import TimeEvent from '../../components/Events/TimeEvent/TimeEvent';
import BaseEvent from '../../components/reusables/BaseEvent/BaseEvent';
import TimelineSlot from "../../components/reusables/TimelineSlot/TimelineSlot";
import EventBuilder from "../../models/EventBuilder";
import EventSlot from "../../components/reusables/EventSlot/EventSlot";


function Timeline(props) {
    const event_1 = new EventBuilder('event 1')
        .setStarts(new Date(1970, 0, 1, 0, 1))
        .build();

    const events = [];
    events.push(event_1);



    const slot_0000 = {
        index: 0,
        starts: new Date(1970, 0, 1, 0, 0),
        eventSlots: [

        ],
    }

    const slot_0030 = {
        index: 1,
        starts: new Date(1970, 0, 1, 0, 30),
        eventSlots: [],
    }

    const slot_0100 = {
        index: 2,
        starts: new Date(1970, 0, 1, 1, 0),
        eventSlots: [],
    }

    const timelineSlots = [
        slot_0000,
        slot_0030,
        slot_0100,
    ];

    function setEvents(timelineSlots, events) {
        events.forEach(event => {
            // console.log(event);
            timelineSlots.forEach(slot => {
                if (event.starts >= slot.starts) {
                    slot.eventSlots.push(event);
                }
            })
        })
    }

    setEvents(timelineSlots, events);

    console.log(timelineSlots);
    /*
             <ul className={styles['timeline__content']}>
                {slots.map(slot => <li key={slot.index}>{slot}</li>)}
            </ul>
    */

    // const timeEventDate = new Date(null, null, null, 5, 30);
    // const rangeEventStartsDate = new Date(null, null, null, 7, 0);
    // const rangeEventEndsDate = new Date(null, null, null, 11, 30);
    // const childTimeEventDate_1 = new Date(null, null, null, 7, 30);
    // const childTimeEventDate_2 = new Date(null, null, null, 9, 0);


    // const events = [
    //     <TimeEvent title="time event" starts={timeEventDate} color="blue" />,
    //     <BaseEvent title="timeless event" color="green" />,
    //     <RangeEvent title="range event" color="orange" starts={rangeEventStartsDate} ends={rangeEventEndsDate}>
    //         <ChildEvent title="child time event 1" starts={childTimeEventDate_1}/>
    //         <ChildEvent title="child timeless event " />
    //         <ChildEvent title="child time event 2" ends={childTimeEventDate_2}/>
    //     </RangeEvent>
    // ];


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['timeline']}>
            <ul className={styles['timeline__content']}>
                {/*{events.map(event => <li key={uuidv4()}>{event}</li>)}*/}
                {timelineSlots.map(slot => <li key={slot.index}>
                    <TimelineSlot starts={slot.starts} events={slot.eventSlots} />
                </li>)}
            </ul>

        </div>
    );
}// Timeline

export default Timeline;