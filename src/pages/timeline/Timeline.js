import { v4 as uuidv4 } from 'uuid';
// import ChildEvent from '../../components/Events/RangeEvent/ChildEvent/ChildEvent';
// import RangeEvent from '../../components/Events/RangeEvent/RangeEvent';
// import TimeEvent from '../../components/Events/TimeEvent/TimeEvent';
// import BaseEvent from '../../components/reusables/BaseEvent/BaseEvent';
import TimelineSlot from "../../components/reusables/TimelineSlot/TimelineSlot";
import EventBuilder from "../../models/EventBuilder";
// import EventSlot from "../../components/reusables/EventSlot/EventSlot";
import styles from './Timeline.module.scss';


function Timeline(props) {
    const event_1 = new EventBuilder('event 1')
        .setStarts(new Date(1970, 0, 1, 0, 0))
        .build();
    const event_2 = new EventBuilder('event 2')
        .setStarts(new Date(1970, 0, 1, 0, 10))
        .build();

    const event_3 = new EventBuilder('event 3')
        .setStarts(new Date(1970, 0, 1, 0, 15))
        .build();

    const event_4 = new EventBuilder('event 4')
        .setStarts(new Date(1970, 0, 1, 0, 35))
        .build();

    const event_5 = new EventBuilder('event 5')
        .setStarts(new Date(1970, 0, 1, 1, 12))
        .build();

    const events = [];
    events.push(event_1);
    events.push(event_2);
    events.push(event_3);
    events.push(event_4);
    events.push(event_5);


    function createSlots(timeSpan = 30) {
        const addMinutes = (date, minutes) => {
            return new Date(date.getTime() + minutes*60000);
        }

        const slots = [];
        let starts = new Date(1970, 0, 1, 0, 0);

        for (let i=0; i<48; i++) {
            const newSlot = {
                index: i,
                starts: starts,
                events: [],
            }

            slots.push(newSlot);
            starts = addMinutes(starts, timeSpan);
        }

        return slots;
    }
    //
    const timelineSlots = createSlots();


    // for each event, push in the corresponding timeline slot
    function setEvents(timelineSlots, events) {
        // console.log(events);

        events.forEach(event => {
            // console.log(event);

            for (let i=0; i<timelineSlots.length; i++) {
                // console.log('----------------------------------------------');
                if (event.starts.getTime() < timelineSlots[i].starts.getTime()) {
                    // console.log('pushing event', event);
                    // console.log('into', timelineSlots[i-1]);
                    timelineSlots[i-1].events.push(event);
                    return;
                }
            }
        })
    }
    //
    setEvents(timelineSlots, events);
    // console.log(timelineSlots);

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
                    <TimelineSlot starts={slot.starts} events={slot.events} />
                </li>)}
            </ul>

        </div>
    );
}// Timeline

export default Timeline;