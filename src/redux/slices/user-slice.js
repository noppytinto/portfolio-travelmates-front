import { v4 as uuidv4 } from 'uuid';
import {createSlice} from '@reduxjs/toolkit';

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
            const currentEvents = state.userData.events;
            const updatedEvents = [...currentEvents];
            updatedEvents.push(action.payload.newEvent);
            state.userData.events = updatedEvents;
        },

        moveEvent(state, action) {
            const currentPosition = action.payload.from;
            const newPosition = action.payload.to;

            const currentEvents = state.userData.events;
            _reorderEvents(currentEvents, currentPosition, newPosition);

            const newEvents = [...currentEvents];
            state.userData.events = newEvents;
        },

        checkEvent(state, action) {
            const isChecked = action.payload.isChecked;
            const index = action.payload.index;

            const currentEvents = state.userData.events;
            const updatedEvents = [...currentEvents];
            updatedEvents[index].isCompleted = isChecked;

            state.userData.events = updatedEvents;
        },

    },
});

function _reorderEvents(arr, from, to) {

    // Make sure a valid array is provided
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        throw new Error('Please provide a valid array');
    }

    // Delete the item from it's current position
    const removed = arr.splice(from, 1);

    // Make sure there's an item to move
    if (!removed.length) {
        throw new Error('There is no item in the array at index ' + from);
    }

    // Move the item to its new position
    arr.splice(to, 0, removed[0]);
};



function getMockEvents() {
    const date_1 = (new Date(1990, 0, 1, 0, 0)).getTime();
    const date_2 = (new Date(1990, 0, 1, 2, 0)).getTime();
    const date_3 = (new Date(1990, 0, 1, 3, 0)).getTime();
    const date_4 = (new Date(1990, 0, 1, 4, 0)).getTime();
    const date_5 = (new Date(1990, 0, 1, 5, 0)).getTime();


    const event_1 = {
        id: uuidv4(),
        title: 'event 1',
        time: date_1,
        color: '',
        files: [],
        images: [],
        isImportant: false,
        isCompleted: false,
        revealTime: true,
    }

    const event_2 = {
        id: uuidv4(),
        title: 'event 2',
        time: date_2,
        color: '',
        files: [],
        images: [],
        isImportant: false,
        isCompleted: false,
        revealTime: true,
    }

    const event_3 = {
        id: uuidv4(),
        title: 'event 3',
        time: date_3,
        color: '',
        files: [],
        images: [],
        isImportant: false,
        isCompleted: false,
        revealTime: false,
    }

    const event_4 = {
        id: uuidv4(),
        title: 'event 4',
        time: date_4,
        color: '',
        files: [],
        images: [],
        isImportant: false,
        isCompleted: false,
        revealTime: true,
    }

    const event_5 = {
        id: uuidv4(),
        title: 'event 5',
        time: date_5,
        color: '',
        files: [],
        images: [],
        isImportant: false,
        isCompleted: false,
        revealTime: false,
    }

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