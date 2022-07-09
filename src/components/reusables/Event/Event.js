import PropTypes from 'prop-types';
import * as assets from '../../../utils/assets-manager'
import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {dragAndDropActions} from '../../../redux/slices/drag-and-drop-slice';
import {isMobile} from 'react-device-detect';
import useSelect from "../../../hooks/use-select";
import {AnimatePresence, motion} from 'framer-motion';
import styles from './Event.module.scss';

const moveButtonsVariants = {
    show: {scale: 1, transition: {duration: 0.2}},
    hide: {scale: 0, transition: {duration: 0.1}},
}


function Event(props) {
    // console.log('component rendered: ', props.title);
    // if (isSelect) console.log('component ', props.title , ' is selected');

    const dispatcher = useDispatch();
    const eventRef = useRef();
    const [isSelect, setIsSelect, triggerSelection, resetSelection] = useSelect(eventRef);

    const color = props.color ?? '';
    const title = props.title ?? '';
    const eventIndex = props.index;
    const timeValue = props.time ?? 0;
    const revealTime = props.revealTime ?? false;
    const isChecked = props.isCompleted || false;
    const givenClasses = props.className;
    const isForceSelect = (props.isForceSelect) || false;

    let classesEvent = `${styles['event']} ${givenClasses} `;
    let classesEventContent = `${styles['event__content']} `;
    let classesEventTitle = `${styles['event__title']} `;
    let classesEventTime = `${styles['event__time']} `;
    
    let hoursAndMinutes = '99:99';

    _setupComponent();


    ///////////////////////////////////
    // EFFECTS
    ///////////////////////////////////
    useEffect(() => {
        if (isMobile && isForceSelect) {
            // when the event is moved, the "selected" state must be kept
            // therefore we must trigger this selection somehow
            triggerSelection();
        }
    }, [isMobile, isForceSelect, eventIndex]);


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <AnimatePresence>

            <div className={classesEvent}>

                <div className={styles['event__indicator']}>
                    {/*/////////////////////////////////*/}
                    {/* checkbox */}
                    {/*/////////////////////////////////*/}
                    <button className={styles['event__btn-check']}
                            onClick={handleOnCheck}>
                        {isChecked ?
                            <assets.IconRadioChecked
                                className={`${styles['event__checkbox']} ${styles['event__checked']}`}/>
                            :
                            <assets.IconRadioUnchecked
                                className={styles['event__checkbox']}/>
                        }
                    </button>
                </div>

                {/*/////////////////////////////////*/}
                {/* content */}
                {/*/////////////////////////////////*/}
                <div className={classesEventContent}
                     draggable
                     onDragStart={handleOnDragStart}
                     onDragEnd={handleOnDragEnd}
                     ref={eventRef}
                     onClick={handleOnClick}>


                    {isMobile && isSelect &&
                        <motion.button
                            className={`${styles['event__btn-move']} ${styles['event__btn-up']}`}
                            onClick={handleOnClickUp}
                            initial={'hide'}
                            animate={'show'}
                            exit={'hide'}
                            variants={moveButtonsVariants}>

                            <assets.IconArrowUp
                                className={styles['event__icon-move']}/>

                        </motion.button>
                    }


                    <div className={styles['event__left-section']}>
                        <p className={classesEventTitle}>{title}</p>
                    </div>


                    <div className={styles['event__right-section']}>
                        {revealTime && <p className={classesEventTime}>{hoursAndMinutes}</p>}

                    </div>

                    {isMobile && isSelect && <motion.button
                        className={`${styles['event__btn-move']} ${styles['event__btn-down']}`}
                        onClick={handleOnClickDown}
                        initial={'hide'}
                        animate={'show'}
                        exit={'hide'}
                        variants={moveButtonsVariants}
                    >
                        <assets.IconArrowDown
                            className={styles['event__icon-move']}/>
                    </motion.button>
                    }


                </div>
            </div>

        </AnimatePresence>
    );


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnClick(ev) {
        if (!isMobile) return;

        triggerSelection(ev);
    }

    function handleOnClickUp(ev) {
        ev.stopPropagation();

        document.removeEventListener('click', resetSelection);
        setIsSelect(false);
        props.onClickUp(eventIndex);
    }

    function handleOnClickDown(ev) {
        ev.stopPropagation();

        document.removeEventListener('click', resetSelection);
        setIsSelect(false);
        props.onClickDown(eventIndex);
    }

    function handleOnDragStart(ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text/plain", `${eventIndex}`);

        ev.target.style.borderColor = '#F39200';

        dispatcher(dragAndDropActions.setData({eventIndex: eventIndex}));
    }

    function handleOnDragEnd(ev) {
        ev.target.style.borderColor = 'transparent';
    }

    function handleOnCheck(ev) {
        props.onCheckEvent(eventIndex, !isChecked);
    }

    function _setupComponent() {
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

        if (isChecked) {
            classesEventContent += styles['event__content--checked'];
            classesEventTitle += styles['event__title--checked'];
        }

        if (isSelect) classesEventContent += ` ${styles['event__content--selected']} `;

        if (timeValue) {
            const date = new Date(timeValue);
            hoursAndMinutes =
                _padTo2Digits(date.getHours()) + ':' + _padTo2Digits(date.getMinutes());
        }
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
    isForceSelect: PropTypes.bool,
    revealTime: PropTypes.bool,
}

// function propsAreEqual(prev, next) {
//     console.log('prev id and next id are equal:', prev.id === next.id);
//     console.log('prev index and next index are equal:', prev.index === next.index && prev.isForceSelect === next.isForceSelect);
//     // return (prev.id === next.id) && (prev.index === next.index && prev.isForceSelect === next.isForceSelect);
//     return (prev.id === next.id);
// }

// export default Event;
// export default React.memo(Event, propsAreEqual);
export default Event;