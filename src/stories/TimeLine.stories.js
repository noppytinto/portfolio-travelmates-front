import React from 'react';
import Timeline from '../pages/Timeline/Timeline';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Pages/TimelinePage',
    component: Timeline,
    // argTypes: {
    //     color: {
    //         options: ['default', 'orange', 'blue', 'red', 'green'],
    //         control: { type: 'radio' },
    //     },
    //     starts: {
    //         control: { type: 'date' },
    //     },
    //     ends: {
    //         control: { type: 'date' },
    //     },
    // },
};

// export const Event = () => <BaseEvent title="base event"></BaseEvent>;
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Timeline {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {

};
