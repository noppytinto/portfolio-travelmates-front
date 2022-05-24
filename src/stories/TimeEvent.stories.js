import React from 'react';
import TimeEvent from '../components/Events/TimeEvent/TimeEvent';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Events/TimeEvent',
    component: TimeEvent,
    argTypes: {
        color: {
            options: ['default', 'orange', 'blue', 'red', 'green'],
            control: { type: 'radio' },
        },
        starts: {
            control: { type: 'date' },
        },
    },
};

// export const Event = () => <BaseEvent title="base event"></BaseEvent>;
//👇 We create a “template” of how args map to rendering
const Template = (args) => <TimeEvent {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    color: '',
    title: 'time event',
    starts: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),
};
