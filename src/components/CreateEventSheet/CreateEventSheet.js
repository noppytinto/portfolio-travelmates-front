import ReactDOM from 'react-dom';
import {useEffect, useState} from "react";
import styles from './CreateEventSheet.module.scss';
import BottomSheet from "../reusables/BottomSheet/BottomSheet";
import TextField from "../reusables/TextField/TextField";



function CreateEventSheet(props) {


    ///////////////////////////////////
    // EFFECTS
    ///////////////////////////////////



    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <BottomSheet onClickOuside={props.onClickOuside}>
            <div className={styles['create-event-sheet']}>
                <TextField label={'Title'} name={'title'}/>
            </div>
        </BottomSheet>
    );
}// CreateEventSheet

export default CreateEventSheet;