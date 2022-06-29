import React from 'react';
import TimelinePage from '../../pages/timeline/TimelinePage';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Pages/TimelinePage',
    component: TimelinePage,
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

// export const Event = () => <Event title="base event"></Event>;
//👇 We create a “template” of how args map to rendering
const Template = (args) => <TimelinePage {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {

};
