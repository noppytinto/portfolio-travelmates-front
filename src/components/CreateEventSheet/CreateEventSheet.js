import { v4 as uuidv4 } from 'uuid';
import BottomSheet from "../reusables/BottomSheet/BottomSheet";
import TextField from "../reusables/TextField/TextField";
import Card from "../reusables/Card/Card";
import Button from "../reusables/Button/Button";
import React, {useRef, useState} from 'react';
import styles from './CreateEventSheet.module.scss';
import TextToggle from "../reusables/TextToggle/TextToggle";


function CreateEventSheet(props) {
    const titleRef = React.createRef();
    const toggleTimeRef = useRef();
    const timePickerRef = useRef();

    const [showTime, setShowTime] = useState(false);


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <BottomSheet className={styles['bottom-sheet']} onClickOutside={props.onClickOutside} >
            <div className={styles['create-event-sheet']}>
                <Card className={styles['create-event-sheet__card']}>
                    <form className={styles['create-event-sheet__form']}>
                        <TextField className={styles['create-event-sheet__textfield']}
                                   label={'Title'}
                                   name={'title'}
                                   ref={titleRef}/>


                        <TextToggle label={'Show Time'} toggleText={['NO', 'YES']} onChange={handleOnChangeToggle}></TextToggle>


                        <br />
                        <br />
                        {showTime &&
                            <>
                                <TextField id="event-time"
                                           type="time"
                                           name="eventTime"
                                           ref={timePickerRef}
                                           pattern="[0-9]{2}:[0-9]{2}"
                                           label={'Time'}

                                />
                            </>
                        }


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
        const revealTime = showTime;
        const time = timePickerRef.current?.value ?? '00:00';

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
        setShowTime(!showTime);
    }
}// CreateEventSheet

export default CreateEventSheet;