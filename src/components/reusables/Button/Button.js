import PrimaryButton from "./PrimaryButton/PrimaryButton";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import TertiaryButton from "./TertiaryButton/TertiaryButton";
import PropTypes from 'prop-types';
import styles from './Button.module.scss';


function Button(props) {
    const label = props.label ?? Button;

    switch (props.type) {
        case 'primary':
            return <PrimaryButton className={`${styles['button']} ${props.className}`}>
                      {label}
                   </PrimaryButton>
        case 'secondary':
            return <SecondaryButton className={`${styles['button']} ${props.className}`}>
                {label}
            </SecondaryButton>
        case 'tertiary':
            return <TertiaryButton className={`${styles['button']} ${props.className}`}>
                {label}
            </TertiaryButton>
        default:
            return <PrimaryButton className={`${styles['button']} ${props.className}`}>
                {label}
            </PrimaryButton>
    }
}//

Button.propTypes = {
    type: PropTypes.oneOf(['', 'primary', 'secondary', 'tertiary']),
    label: PropTypes.string,
    // time: PropTypes.instanceOf(Date),
    // checked: PropTypes.bool,
}

export default Button;