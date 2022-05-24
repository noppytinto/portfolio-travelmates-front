import React from 'react';
import RangeEvent from '../components/Events/RangeEvent/RangeEvent';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Events/RangeEvent',
    component: RangeEvent,
    argTypes: {
        color: {
            options: ['default', 'orange', 'blue', 'red', 'green'],
            control: { type: 'radio' },
        },
        starts: {
            control: { type: 'date' },
        },
        ends: {
            control: { type: 'date' },
        },
    },
};

// export const Event = () => <BaseEvent title="base event"></BaseEvent>;
//👇 We create a “template” of how args map to rendering
const Template = (args) => <RangeEvent {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    color: '',
    title: 'range event',
    starts: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),
    ends: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        11,
        0),
};
