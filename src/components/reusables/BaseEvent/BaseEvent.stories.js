import React from 'react';
import BaseEvent from './BaseEvent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Events/BaseEvent',
  component: BaseEvent,
  argTypes: {
    color: {
      options: ['', 'orange', 'blue', 'red', 'green'],
      control: { type: 'select' },
    },
  },
};

// export const Event = () => <BaseEvent title="base event"></BaseEvent>;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BaseEvent {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const Default = Template.bind({});
Default.args = {
    title: 'default base event',
};

export const Orange = Template.bind({});
Orange.args = {
    title: 'orange base event',
    color: 'orange',
};

export const Blue = Template.bind({});
Blue.args = {
    title: 'blue base event',
    color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
    title: 'green base event',
    color: 'green',
};

export const Red = Template.bind({});
Red.args = {
    title: 'red base event',
    color: 'red',
};
