import { v4 as uuidv4 } from 'uuid';
import BottomSheet from "../reusables/BottomSheet/BottomSheet";
import TextField from "../reusables/TextField/TextField";
import Card from "../reusables/Card/Card";
import Button from "../reusables/Button/Button";
import React, {useRef} from 'react';
import styles from './CreateEventSheet.module.scss';


function CreateEventSheet(props) {
    const titleRef = React.createRef();
    const toggleTimeRef = useRef();
    const timePickerRef = useRef();



    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <BottomSheet className={styles['bottom-sheet']} onClickOutside={props.onClickOutside} >
            <div className={styles['create-event-sheet']}>
                <Card className={styles['create-event-sheet__card']}>
                    <form className={styles['create-event-sheet__form']}>
                        <TextField className={styles['create-event-sheet__textfield']}
                                   label={'Title'} name={'title'} ref={titleRef}/>


                        <label htmlFor={'toggle-switch'}> show time: </label>
                        <label className="toggle-switch">
                            <input id={'toggle-switch'} type="checkbox" ref={toggleTimeRef}/>
                            <span className="toggle-slider round"></span>
                        </label>
                        <br />
                        <br />
                        <label htmlFor="event-time">time :</label>
                        <input type="time" id="event-time" name="eventTime" ref={timePickerRef}  pattern="[0-9]{2}:[0-9]{2}"/>



                    </form>

                </Card>
            </div>

            <footer className={styles['create-event-sheet__footer']}>
                <Button type={'tertiary'} label={'Cancel'} onClick={props.onClickCancel}/>
                <Button type={'primary'} label={'Create Event'} onClick={handleOnClickCreateEvent}/>
            </footer>
        </BottomSheet>
    );


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnClickCreateEvent(ev) {
        console.log('event created');
        const title = titleRef.current.value;
        const revealTime = toggleTimeRef.current.checked;
        const time = timePickerRef.current.value;

        if (!title) return;

        const timeArray = time.split(':');
        const hours = timeArray[0];
        const minutes = timeArray[1];
        const dateTime = (new Date(1990, 0, 1, hours, minutes)).getTime();

        const createdEvent = {
            id: uuidv4(),
            title: title,
            time: dateTime ?? 0,
            color: '',
            files: [],
            images: [],
            isImportant: false,
            isCompleted: false,
            revealTime: revealTime,
        }

        props.onClickCreateEvent(ev, createdEvent);
    }


    function handleOnChangeToggle(ev) {

    }
}// CreateEventSheet

export default CreateEventSheet;