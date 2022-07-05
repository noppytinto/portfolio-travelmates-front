import styles from './SecondaryButton.module.scss'

function SecondaryButton(props) {
    return (
        <button {...props} className={`${styles['secondary-button']} ${props.className}`}>
            {props.children}
        </button>
    )
}//

export default SecondaryButton;