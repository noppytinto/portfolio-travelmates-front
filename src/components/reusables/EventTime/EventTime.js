import styles from './EventTime.module.scss';
import PropTypes from 'prop-types';
import RangeEvent from "../../Events/RangeEvent/RangeEvent";


function EventTime(props) {
    const givenClasses = props.className;

    const withIndicator = props.withIndicator ?? false;
    const withAMPM = props.withAMPM ?? false;
    const indicatorColor = props.indicatorColor;
    const valueTint = props.valueTint;
    const timeValue = props.value;
    
    // console.log('TIMEVALUE:', timeValue);

    let classesEventTime = `${styles['event-time']} ${givenClasses} `;

    let classesCircle = `${styles['event-time__circle']} `;
    switch (indicatorColor) {
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

    let classesValue = `${styles['event-time__value']} `;
    switch (valueTint) {
        case 'grey': 
            classesValue += styles['event-time__value--grey'];
        case 'grey-light':
            classesValue += styles['event-time__value--grey-light'];
            break;
    }

    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
    }

    let hoursAndMinutes = '99:99';
    if (timeValue) {
        const date = new Date(timeValue);
        hoursAndMinutes =
            padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());
    }



    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesEventTime}>
            <p className={classesValue}>
                {hoursAndMinutes}
            </p>
            {withIndicator && <span className={classesCircle}></span>}
        </div>
    );
}// EventTime

RangeEvent.propTypes = {
    timeValue: PropTypes.instanceOf(Date),
    withIndicator: PropTypes.bool,
    withAMPM: PropTypes.bool,
    indicatorColor: PropTypes.oneOf(['', 'orange', 'blue', 'green', 'red']),
    valueTint: PropTypes.oneOf(['', 'grey']),
}

export default EventTime;