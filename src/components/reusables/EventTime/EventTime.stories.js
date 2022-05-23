import React from 'react';
import EventTime from './EventTime';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Time',
  component: EventTime,
  argTypes: {
    indicatorColor: {
      options: ['default', 'orange', 'blue', 'red', 'green'],
      control: { type: 'radio' },
    },
    valueTint: {
        options: ['default', 'grey'],
        control: { type: 'radio' },
      },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <EventTime {...args} />;

export const Event = Template.bind({});
Event.args = {
    withIndicator: false,
    withAMPM: false,
    value: '06:00',
 };
// export const Event = () => <BaseEvent title="base event"></BaseEvent>;