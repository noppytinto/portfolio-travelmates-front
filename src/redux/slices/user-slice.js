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