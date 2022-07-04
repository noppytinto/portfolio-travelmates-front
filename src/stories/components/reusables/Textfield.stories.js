import React from 'react';
import TextField from '../../../components/reusables/TextField/TextField';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Reusables/TextField',
    component: TextField,
    // argTypes: {
    //
    // },
};

// export const Event = () => <Event title="base event"></Event>;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TextField {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    type: 'text',
    name: 'title',
    label: 'Title',
};


