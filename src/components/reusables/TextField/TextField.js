import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import styles from './TextField.module.scss';

// const variants = {
//     hidden: {
//         opacity: 0,
//         y: ['100%'],
//         transition: {
//             duration: 1,
//         }
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//         }
//     },
// }

const TextField = React.forwardRef((props, ref) => {
    const type = props.type || 'text';
    const name = props.name;
    const label = props.label || '';

    let classesLabel = `${styles['textfield__label']} ${styles['textfield__label--centered']}`;
    let classesInput = `${styles['textfield__input']} ${styles['textfield__input--invisible']}`;
    const [showInput, setShowInput] = useState(false);

    if (showInput) {
        classesLabel = `${styles['textfield__label']}`;
        classesInput = `${styles['textfield__input']}`;
    }

    ///////////////////////////////////
    // EFFECTS
    ///////////////////////////////////



    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnClick(ev) {
        setShowInput(true);
    }

    function handleOnBlur(ev) {
        if (!ev.target.value) {
            setShowInput(false);
        }
    }

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={`${styles['textfield']}`}>

            <label className={classesLabel}
                   htmlFor={name}
                   onClick={handleOnClick}>
                {label}
            </label>

            <input className={classesInput}
                   id={name}
                   type={type}
                   name={name}
                   ref={ref}
                   onBlur={handleOnBlur}
            />
        </div>
    );
});// TextField

TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
}


export default TextField;