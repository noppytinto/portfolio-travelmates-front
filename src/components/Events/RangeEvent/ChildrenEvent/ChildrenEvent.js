import styles from './ChildrenEvent.module.scss';


function ChildrenEvent(props) {
    const color = props.color;
    const children = props.children;
    const title = props.title;


    let classesChildrenEvent = `${styles['children-event']} `;

    
    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className={classesChildrenEvent}>

        </div>
    );
}// ChildrenEvent

export default ChildrenEvent;