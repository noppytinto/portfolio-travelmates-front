import Sheet from "../reusables/Sheet/Sheet";
import styles from './Card.module.scss';

function Card(props) {
    return (
        <Sheet className={`${styles['card']} ${props.className}`}>
            {props.children}
        </Sheet>
    );
}//

export default Card;