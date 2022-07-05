import styles from './FloatingButton.module.scss';

function FloatingButton(props) {


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <button className={`${styles['floating-button']} ${props.className}`}
                onClick={props.onClick}>
            {props.children}
        </button>
    );
}//

export default FloatingButton;