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
            state.userData.events = [...oldEvents, action.payload.event];
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

    return events;
}


export default userSlice;

// export actions
export const userActions = userSlice.actions;