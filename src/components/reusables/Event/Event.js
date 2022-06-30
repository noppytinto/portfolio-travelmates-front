import PropTypes from 'prop-types';
import * as assets from '../../../utils/assets-manager'
import {useState} from "react";
import styles from './Event.module.scss';


function Event(props) {
    const color = props.color ?? '';
    const title = props.title ?? '';
    const timeValue = props.time ?? null;
    const initialChecked = props.isCompleted || false;

    const [checked, setChecked] = useState(initialChecked);

    const givenClasses = props.className;
    let classesEvent = `${styles['event']} ${givenClasses} `;
    let classesEventContent = `${styles['event__content']} `;
    let classesEventTitle = `${styles['event__title']} `;
    let classesEventTime = `${styles['event__time']} `;

    switch (color) {
        case 'orange':
            classesEventContent += `${styles['event__content--orange']} `;
            break;
        case 'blue':
            classesEventContent += `${styles['event__content--blue']} `;
            break;
        case 'green':
            classesEventContent += `${styles['event__content--green']} `;
            break;
        case 'red':
            classesEventContent += `${styles['event__content--red']} `;
            break;
        default :
            break;

    }

    if(checked) {
        classesEventContent += styles['event__content--checked'];
        classesEventTitle += styles['event__title--checked'];
        classesEventTime += styles['event__time--checked'];
    }

    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
    }

    let hoursAndMinutes = '99:99';
    if (timeValue) {
        const date = new Date(timeValue);
        hoursAndMinutes =
            padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());
    }

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}>
            <div className={styles['event__indicator']}>
                <p className={classesEventTime}>{hoursAndMinutes}</p>

                {/*/////////////////////////////////*/}
                {/* checkbox */}
                {/*/////////////////////////////////*/}
                <button className={styles['event__btn-check']} onClick={() => setChecked(!checked)}>
                    {checked ?
                        <assets.IconRadioChecked className={`${styles['event__checkbox']} ${styles['event__checked']}`}/>
                        :
                        <assets.IconRadioUnchecked className={styles['event__checkbox']}/>
                    }
                </button>
            </div>




            {/*/////////////////////////////////*/}
            {/* content */}
            {/*/////////////////////////////////*/}
            <div className={classesEventContent}>
                <div className={styles['event__left-section']}>
                    <p className={classesEventTitle}>{title}</p>
                </div>

                <div className={styles['event__right-section']}>
                </div>
            </div>
        </div>
    );
}// Event

Event.propTypes = {
    color: PropTypes.oneOf(['', 'orange', 'blue', 'green', 'red']),
    title: PropTypes.string,
    time: PropTypes.instanceOf(Date),
    checked: PropTypes.bool,
}

export default Event;