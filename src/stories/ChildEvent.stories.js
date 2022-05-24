import React from 'react';
import ChildEvent from '../components/Events/RangeEvent/ChildEvent/ChildEvent';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Events/ChildEvent',
    component: ChildEvent,
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
const Template = (args) => <ChildEvent {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    color: '',
    title: 'time event',
    starts: null,
};

export const WithTime = Template.bind({});
WithTime.args = {
    color: '',
    title: 'time event',
    starts: new Date(1970,0,1,7,30),
};