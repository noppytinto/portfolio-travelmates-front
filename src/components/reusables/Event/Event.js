import styles from './Event.module.scss';


function Event(props) {
    const givenClasses = props.className;
    const color = props.color;
    const children = props.children;


    let classesEvent = `${styles['event']} ${givenClasses} `;

    switch (color) {
        case 'orange': 
            classesEvent += styles['event--orange'];
            break;
        case 'blue': 
            classesEvent += styles['event--blue'];
            break;
        case 'green': 
            classesEvent += styles['event--green'];
            break;
        case 'red': 
            classesEvent += styles['event--red'];
            break;
    }


    return (
        <div className={classesEvent}>
            <div className={styles['event__content']}>

                <header className={styles['event__header']}>

                    {/* <div className="event__icon"></div> */}
                    <p className={styles['event__title']}>{children}</p>

                    {/* <ul className="event__icons"></ul>
                    <div className="event__priority"></div> */}
                </header>

            </div>
        </div>
    );
}// Event

export default Event;