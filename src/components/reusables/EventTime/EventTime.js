import styles from './EventTime.module.scss';


function EventTime(props) {
    const color = props.color;
    const timeValue = props.children;
    const givenClasses = props.className;

    let classesEventTime = `${styles['event-time']} ${givenClasses}`;

    return (
        <div className={classesEventTime}>
            <p className={styles['event-time__value']}>
                {timeValue}
            </p>
            <span className={styles['event-time__circle']}></span>
        </div>
    );
}// EventTime

export default EventTime;