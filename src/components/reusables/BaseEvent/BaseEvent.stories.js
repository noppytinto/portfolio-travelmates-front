import React from 'react';
import BaseEvent from './BaseEvent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Event',
  component: BaseEvent,
  argTypes: {
    color: {
      options: ['orange', 'blue', 'red', 'green'],
      control: { type: 'select' },
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BaseEvent {...args} />;

export const Base = Template.bind({});
Base.args = {
    title: 'base event',
 };
// export const Event = () => <BaseEvent title="base event"></BaseEvent>;