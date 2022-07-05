import styles from './PrimaryButton.module.scss'

function PrimaryButton(props) {
    return (
        <button className={`${styles['primary-button']} ${props.className}`}>
            {props.children}
        </button>
    )
}//

export default PrimaryButton;