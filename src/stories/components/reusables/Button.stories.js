import React from 'react';
import Button from '../../../components/reusables/Button/Button';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Reusables/Button',
    component: Button,
    // argTypes: {
    //
    // },
};

// export const Event = () => <Event title="base event"></Event>;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    label: 'Secondary',
};

export const Tertirary = Template.bind({});
Tertirary.args = {
    type: 'tertiary',
    label: 'Tertiary',
};

