import React from 'react';
import Event from '../../../components/reusables/Event/Event';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Reusables/Event',
    component: Event,
    argTypes: {
        color: {
            options: ['', 'orange', 'blue', 'red', 'green'],
            control: {type: 'select'},
        },
        time: {
            control: {type: 'date'},
        },
    },
};

// export const Event = () => <Event title="base event"></Event>;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Event {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    title: 'default base event',
    time: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),
};

export const Orange = Template.bind({});
Orange.args = {
    title: 'orange base event',
    color: 'orange',
    time: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),
};

export const Blue = Template.bind({});
Blue.args = {
    title: 'blue base event',
    color: 'blue',
    time: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),
};

export const Green = Template.bind({});
Green.args = {
    title: 'green base event',
    color: 'green',
    time: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),
};

export const Red = Template.bind({});
Red.args = {
    title: 'red base event',
    color: 'red',
    time: new Date(
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDay(),
        6,
        30),

};
