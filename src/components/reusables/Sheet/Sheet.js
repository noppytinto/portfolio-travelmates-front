import styles from "./Sheet.module.scss";


function Sheet(props) {
    return (
        <div className={`${styles['sheet']} ${props.className}`}>
            {props.children}
        </div>
    );
}//

export default Sheet;