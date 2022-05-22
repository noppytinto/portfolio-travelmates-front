import styles from './EventTime.module.scss';


function EventTime(props) {
    const withIndicator = props.withIndicator ?? false;
    const withAMPM = props.withAMPM ?? false;
    const color = props.color;
    const timeValue = props.children;
    const givenClasses = props.className;

    let classesEventTime = `${styles['event-time']} ${givenClasses} `;

    let classesCircle = `${styles['event-time__circle']} `;
    switch (color) {
        case 'orange': 
            classesCircle += styles['event-time__circle--orange'];
            break;
        case 'blue': 
            classesCircle += styles['event-time__circle--blue'];
            break;
        case 'green': 
            classesCircle += styles['event-time__circle--green'];
            break;
        case 'red': 
            classesCircle += styles['event-time__circle--red'];
            break;
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEventTime}>
            <p className={styles['event-time__value']}>
                {timeValue}
            </p>
            {withIndicator && <span className={classesCircle}></span>}
        </div>
    );
}// EventTime

export default EventTime;