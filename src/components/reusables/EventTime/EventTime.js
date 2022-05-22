import styles from './EventTime.module.scss';


function EventTime(props) {
    const withIndicator = props.withIndicator ?? false;
    const withAMPM = props.withAMPM ?? false;
    const color = props.color;
    const timeValue = props.children;
    const givenClasses = props.className;

    let classesEventTime = `${styles['event-time']} ${givenClasses}`;

    return (
        <div className={classesEventTime}>
            <p className={styles['event-time__value']}>
                {timeValue}
            </p>
            {withIndicator && <span className={styles['event-time__circle']}></span>}
        </div>
    );
}// EventTime

export default EventTime;