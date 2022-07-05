import styles from './TertiaryButton.module.scss'

function TertiaryButton(props) {
    return (
        <button {...props} className={`${styles['tertiary-button']} ${props.className}`}>
            {props.children}
        </button>
    )
}//

export default TertiaryButton;