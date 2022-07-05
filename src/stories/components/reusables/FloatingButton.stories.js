import React from 'react';
import FloatingButton from '../../../components/reusables/FloatingButton/FloatingButton';
import * as assets from "../../../utils/assets-manager";
import styles from "../../../pages/timeline/TimelinePage.module.scss";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Reusables/FloatingButton',
    component: FloatingButton,
    // argTypes: {
    //     children: {
    //         mapping: {
    //             Icon: <assets.IconAdd className={styles['timeline__icon-add']} />
    //         }
    //     }
    // },
};

// export const Event = () => <Event title="base event"></Event>;

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FloatingButton {...args} />;


///////////////////////////
// STORIES
///////////////////////////
export const WithIcon = Template.bind({});
WithIcon.args = {
    children: <assets.IconAdd />
};



