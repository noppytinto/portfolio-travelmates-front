import PropTypes from 'prop-types';
import * as assets from '../../../utils/assets-manager'
import styles from './BaseEvent.module.scss';
import {useState} from "react";


function BaseEvent(props) {
    const givenClasses = props.className;

    const color = props.color ?? '';
    const title = props.title ?? '';
    const time = props.time ?? '';
    const externalChecked = props.checked || false;

    const [checked, setChecked] = useState(externalChecked);

    let classesEvent = `${styles['event']} ${givenClasses} `;
    let classesEventContent = `${styles['event__content']} `;
    let classesEventTitle = `${styles['event__title']} `;

    switch (color) {
        case 'orange':
            classesEvent += styles['event--orange'];
            break;
        case 'blue':
            classesEvent += styles['event--blue'];
            break;
        case 'green':
            classesEvent += styles['event--green'];
            break;
        case 'red':
            classesEvent += styles['event--red'];
            break;
    }

    if(checked) {
        classesEventContent += styles['event__content--checked'];
        classesEventTitle += styles['event__title--checked'];
    }

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}>
            <button className={styles['event__btn-check']} onClick={() => setChecked(!checked)}>
                {checked ?
                    <assets.IconRadioChecked className={`${styles['event__checkbox']} ${styles['event__checked']}`}/>
                    :
                    <assets.IconRadioUnchecked className={styles['event__checkbox']}/>
                }
            </button>


            <div className={classesEventContent}>


                <div className={styles['event__left-section']}>


                    <p className={classesEventTitle}>{title}</p>
                </div>

                {/* <ul className="event__icons"></ul>
                    <div className="event__priority"></div> */}
                <div className={styles['event__right-section']}>
                    <p className={styles['event__time']}>{time}</p>
                </div>
            </div>
            {/* <div className="event__icon"></div> */}

        </div>
    );
}// BaseEvent

BaseEvent.propTypes = {
    color: PropTypes.oneOf(['', 'orange', 'blue', 'green', 'red']),
    title: PropTypes.string,
    time: PropTypes.string,
    checked: PropTypes.bool,
}

export default BaseEvent;