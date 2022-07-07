import PropTypes from 'prop-types';
import * as assets from '../../../utils/assets-manager'
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import { dragAndDropActions } from '../../../redux/slices/drag-and-drop-slice';
import {isMobile} from 'react-device-detect';

import styles from './Event.module.scss';
import useSelect from "../../../hooks/use-select";


function Event(props) {
    const color = props.color ?? '';
    const title = props.title ?? '';
    const eventIndex = props.index;
    const timeValue = props.time ?? 0;
    const isChecked = props.isCompleted || false;
    const givenClasses = props.className;
    const keepShowingMoveButtons = (isMobile && props.showMoveEventButtons) || false;
    const eventRef = useRef();

    // const [isSelected, setIsSelected] = useState(false);
    const [isSelected, setIsSelected, handleOnSelect] = useSelect(eventRef);

    const dispatcher = useDispatch();

    let classesEvent = `${styles['event']} ${givenClasses} `;
    let classesEventContent = `${styles['event__content']} ${(isSelected && styles['event__content--selected'])} `;
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

    if(isChecked) {
        classesEventContent += styles['event__content--checked'];
        classesEventTitle += styles['event__title--checked'];
        classesEventTime += styles['event__time--checked'];
    }

    let hoursAndMinutes = '99:99';
    if (timeValue) {
        const date = new Date(timeValue);
        hoursAndMinutes =
            _padTo2Digits(date.getHours()) + ':' + _padTo2Digits(date.getMinutes());
    }




    //
    useEffect(() => {
        if (keepShowingMoveButtons) {
            handleOnSelect();
        }
    }, [keepShowingMoveButtons]);


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
                <button className={styles['event__btn-check']} onClick={handleOnCheck}>
                    {isChecked ?
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
                 draggable
                 onDragStart={handleOnDragStart}
                 ref={eventRef}
                 onClick={handleOnSelect}>

                {isMobile && isSelected && <button className={`${styles['event__btn-move']} ${styles['event__btn-up']}`}
                                                   onClick={handleOnClickUp}>
                    <assets.IconArrowUp className={styles['event__icon-move']}/>
                </button>
                }


                <div className={styles['event__left-section']}>
                    <p className={classesEventTitle}>{title}</p>
                </div>


                <div className={styles['event__right-section']}></div>

                {isMobile && isSelected && <button className={`${styles['event__btn-move']} ${styles['event__btn-down']}`}
                                                   onClick={handleOnClickDown}>
                    <assets.IconArrowDown className={styles['event__icon-move']}/>
                </button>
                }

            </div>
        </div>
    );



    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////


    function handleOnClickUp(ev) {
        ev.stopPropagation();

        if (!isMobile) return;

        setIsSelected(false);
        props.onClickUp(eventIndex);
    }

    function handleOnClickDown(ev) {
        ev.stopPropagation();

        if (!isMobile) return;

        setIsSelected(false);
        props.onClickDown(eventIndex);
    }

    function handleOnDragStart(ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text/plain", `${eventIndex}`);

        dispatcher(dragAndDropActions.setData({eventIndex: eventIndex}));
    }

    function handleOnCheck(ev) {
        props.onCheckEvent(eventIndex, !isChecked);
    }

    function _padTo2Digits(num) {
        return String(num).padStart(2, '0');
    }

}// Event

Event.propTypes = {
    color: PropTypes.oneOf(['', 'orange', 'blue', 'green', 'red']),
    title: PropTypes.string,
    time: PropTypes.number,
    isCompleted: PropTypes.bool,
}

function propsAreEqual(prev, next) {
    return (prev.index === next.index) && (prev.isCompleted === next.isCompleted);
}

// export default Event;
// export default React.memo(Event, propsAreEqual);
export default Event;