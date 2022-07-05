import {createSlice} from '@reduxjs/toolkit';
import EventBuilder from "../../models/EventBuilder";


const testUser = {
    username: 'test',
    events: getMockEvents(),
}

const initialState = {
    userData: testUser,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload.userData;
        },

        addEvent(state, action) {
            const oldEvents = state.userData.events;

            // const newEvents = new Map(oldEvents);
            const newEvents = [...oldEvents];
            newEvents.push(action.payload.event);
            state.userData.events = newEvents;
        },

    },
});



function getMockEvents() {
    let id = 0;
    console.log();
    const date_1 = (new Date(1990, 0, 1, 0, 0)).getTime();
    const date_2 = (new Date(1990, 0, 1, 2, 0)).getTime();
    const date_3 = (new Date(1990, 0, 1, 3, 0)).getTime();
    const date_4 = (new Date(1990, 0, 1, 4, 0)).getTime();
    const date_5 = (new Date(1990, 0, 1, 5, 0)).getTime();

    const event_1 = new EventBuilder(id++, 'event 1')
        .setTime(date_1)
        .build();
    const event_2 = new EventBuilder(id++,'event 2')
        .setTime(date_2)
        .build();

    const event_3 = new EventBuilder(id++,'event 3')
        .setTime(date_3)
        .build();

    const event_4 = new EventBuilder(id++,'event 4')
        .setTime(date_4)
        .build();

    const event_5 = new EventBuilder(id++,'event 5')
        .setTime(date_5)
        .build();


    const events = [];
    events.push(event_1);
    events.push(event_2);
    events.push(event_3);
    events.push(event_4);
    events.push(event_5);

    console.log(events);

    // const events = new Map();
    // events.set(event_1.getId(), event_1);
    // events.set(event_2.getId(), event_2);
    // events.set(event_3.getId(), event_3);
    // events.set(event_4.getId(), event_4);
    // events.set(event_5.getId(), event_5);

    return events;
}


export default userSlice;

// export actions
export const userActions = userSlice.actions;