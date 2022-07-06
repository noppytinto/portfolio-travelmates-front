import { v4 as uuidv4 } from 'uuid';
import BottomSheet from "../reusables/BottomSheet/BottomSheet";
import TextField from "../reusables/TextField/TextField";
import Card from "../reusables/Card/Card";
import Button from "../reusables/Button/Button";
import React from 'react';
import styles from './CreateEventSheet.module.scss';


function CreateEventSheet(props) {

    ///////////////////////////////////
    // EFFECTS
    ///////////////////////////////////
    const titleRef = React.createRef();

    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleOnClickCreateEvent(ev) {
        console.log('event created');
        const title = titleRef.current.value;
        if (!title) return;

        const createdEvent = {
            id: uuidv4(),
            title: title,
            time: Date.now(),
            color: '',
            files: [],
            images: [],
            isImportant: false,
            isCompleted: false,
        }

        props.onClickCreateEvent(ev, createdEvent);
    }


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <BottomSheet className={styles['bottom-sheet']} onClickOutside={props.onClickOutside} >
            <div className={styles['create-event-sheet']}>
                <Card className={styles['create-event-sheet__card']}>
                    <TextField label={'Title'} name={'title'} ref={titleRef}/>

                </Card>
            </div>

            <footer className={styles['create-event-sheet__footer']}>
                <Button type={'tertiary'} label={'Cancel'} onClick={props.onClickCancel}/>
                <Button type={'primary'} label={'Create Event'} onClick={handleOnClickCreateEvent}/>
            </footer>
        </BottomSheet>
    );
}// CreateEventSheet

export default CreateEventSheet;