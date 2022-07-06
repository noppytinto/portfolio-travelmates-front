import PropTypes from 'prop-types';
import * as assets from '../../../utils/assets-manager'
import React, {useState} from "react";
import styles from './Event.module.scss';
import { useDrag } from 'react-dnd'

export const ItemTypes = {
    EVENT: 'event'
};

function Event(props) {
    const color = props.color ?? '';
    const title = props.title ?? '';
    const index = props.index;
    const timeValue = props.time ?? 0;
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

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.EVENT,
        item: {eventIndex: index},
        // canDrop: (monitor) => {allowed(monitor.eventIndex, index)},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            item: monitor.getItem(),
        })
    }))

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEvent}
             style={{opacity: isDragging ? 0.5 : 1,}}
             >

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
            <div className={classesEventContent}
                 ref={drag}
                 style={{opacity: isDragging ? 0.5 : 1,}}
            >
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
    time: PropTypes.number,
    checked: PropTypes.bool,
}

function propsAreEqual(prev, next) {
    return prev.id === next.id || prev.index === next.index;
}

// export default Event;
// export default React.memo(Event, propsAreEqual);
export default Event;