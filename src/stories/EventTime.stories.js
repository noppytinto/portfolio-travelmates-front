import React from 'react';
import EventTime from '../components/reusables/EventTime/EventTime';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Reusables/Time',
    component: EventTime,
    argTypes: {
        value: {
            control: {type: 'date'},
        },
        indicatorColor: {
            options: ['default', 'orange', 'blue', 'red', 'green'],
            control: {type: 'radio'},
        },
        valueTint: {
            options: ['default', 'grey'],
            control: {type: 'radio'},
        },
    },
};

// export const Event = () => <BaseEvent title="base event"></BaseEvent>;
//👇 We create a “template” of how args map to rendering
const Template = (args) => <EventTime {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    withIndicator: false,
    withAMPM: false,
    value: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30
    ),
};

export const WithIndicator = Template.bind({});
WithIndicator.args = {
    withIndicator: true,
    withAMPM: false,
    value: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30
    ),
};
