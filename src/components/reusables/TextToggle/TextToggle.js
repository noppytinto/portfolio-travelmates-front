
import styles from './TextToggle.module.scss';
import React, {useState} from "react";

function TextToggle(props) {
    const label = props.label || 'Toggle';
    const toggleText = props.toggleText || ['NO', 'YES'];
    const [isToggled, setIsToggled] = useState(false);


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={styles['text-toggle']}>
            <label className={styles['text-toggle__label']} htmlFor={'text-toggle'}> {label} </label>
            <label className={styles['text-toggle__container']}>
                <input className={styles['text-toggle__input']}
                       id={'text-toggle'}
                       type="checkbox"
                       onChange={handleOnChange}
                       />
                <p className={`${styles['text-toggle__slider']} ${styles['text-toggle__slider--round']}`}>
                    {isToggled ? toggleText[1] : toggleText[0]}
                </p>
            </label>
        </div>

    );



    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnChange(ev) {
        setIsToggled(!isToggled);
        props.onChange();
    }

}//

export default TextToggle;