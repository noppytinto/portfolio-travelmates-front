import styles from './SecondaryButton.module.scss'

function SecondaryButton(props) {
    return (
        <button className={`${styles['secondary-button']} ${props.className}`}>
            {props.children}
        </button>
    )
}//

export default SecondaryButton;