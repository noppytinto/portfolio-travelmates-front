import ReactDOM from 'react-dom';
import {useEffect, useState} from "react";
import BottomSheet from "../reusables/BottomSheet/BottomSheet";
import TextField from "../reusables/TextField/TextField";
import Card from "../Card/Card";
import styles from './CreateEventSheet.module.scss';



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
                <Card className={styles['create-event-sheet__card']}>
                    <TextField label={'Title'} name={'title'}/>

                </Card>
            </div>
        </BottomSheet>
    );
}// CreateEventSheet

export default CreateEventSheet;