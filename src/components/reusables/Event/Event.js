import PropTypes from 'prop-types';
import * as assets from '../../../utils/assets-manager'
import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import { dragAndDropActions } from '../../../redux/slices/drag-and-drop-slice';
import {isMobile} from 'react-device-detect';

import styles from './Event.module.scss';
import useSelect from "../../../hooks/use-select";
import { AnimatePresence, motion } from 'framer-motion';

const moveButtonsVariants = {
    show:{ scale: 1, transition: {duration: 0.2}},
    hide:{ scale: 0, transition: {duration: 0.1}},
}

const eventVariants = {
    moveDown:{ y: 100, transition: {duration: 0.2}},
    hide:{ y: 100, transition: {duration: 0.1}},
}

function Event(props) {
    const color = props.color ?? '';
    const title = props.title ?? '';
    const eventIndex = props.index;
    const timeValue = props.time ?? 0;
    const isChecked = props.isCompleted || false;
    const givenClasses = props.className;
    const isForceSelect = (props.isForceSelect) || false;
    const eventRef = useRef();

    const [isSelect, setIsSelect, triggerSelection, resetSelection] = useSelect(eventRef);

    const dispatcher = useDispatch();

    let classesEvent = `${styles['event']} ${givenClasses} `;
    let classesEventContent = `${styles['event__content']} ${(isSelect && styles['event__content--selected'])} `;
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
        if (isMobile && isForceSelect) {
            // when the event is moved, the "selected" state must be kept
            // therefore we must trigger this selection somehow
            triggerSelection();
        }
    }, [isMobile, isForceSelect]);


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <AnimatePresence>  
        
        <div className={classesEvent}   >

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
                 onClick={handleOnClick}

                //  initial={'hide'}
                //  animate={'show'}

                 >
 
                
                    {isMobile && isSelect && <motion.button  className={`${styles['event__btn-move']} ${styles['event__btn-up']}`}
                                                            onClick={handleOnClickUp}                                                    
                                                            initial={'hide'}
                                                            animate={'show'}
                                                            exit={'hide'}
                                                            variants={moveButtonsVariants}
                                                            >
                        <assets.IconArrowUp className={styles['event__icon-move']}/>
                    </motion.button>
                    }



                <div className={styles['event__left-section']}>
                    <p className={classesEventTitle}>{title}</p>
                </div>


                <div className={styles['event__right-section']}></div>

                    {isMobile && isSelect && <motion.button className={`${styles['event__btn-move']} ${styles['event__btn-down']}`}
                                                    onClick={handleOnClickDown}
                                                    initial={'hide'}
                                                    animate={'show'}
                                                    exit={'hide'}
                                                    variants={moveButtonsVariants}
                                                    >
                        <assets.IconArrowDown className={styles['event__icon-move']}/>
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
        props.onClickUp(eventIndex, setIsSelect, resetSelection);
    }

    function handleOnClickDown(ev) {
        ev.stopPropagation();
        props.onClickDown(eventIndex, setIsSelect, resetSelection);
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