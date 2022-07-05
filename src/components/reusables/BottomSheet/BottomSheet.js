import ReactDOM from 'react-dom';
import {useEffect, useState} from "react";
import styles from './BottomSheet.module.scss';

// const variants = {
//     hidden: {
//         opacity: 0,
//         y: ['100%'],
//         transition: {
//             duration: 1,
//         }
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//         }
//     },
// }

function BottomSheet(props) {
    const [mounted, setMounted] = useState(false);
    const onClickOutside = props.onClickOutside ?? (() => {});

    ///////////////////////////////////
    // EFFECTS
    ///////////////////////////////////
    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, []);


    ///////////////////////////////////
    // FUNCTIONS
    ///////////////////////////////////
    function handleClickOutside(ev) {
        onClickOutside(ev);
    }

    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return mounted
        ? ReactDOM.createPortal(
            <div className={`${styles['bottom-sheet']}`}
                        onClick={handleClickOutside}
                        // variants={variants}
                        // initial="hidden"
                        // animate="visible"
                        // exit="hidden"
                // onAnimationEnd={}
            >
                <div className={`${styles['bottom-sheet__content']} ${props.className}`}
                     onClick={ev => ev.stopPropagation()}>
                    {props.children}
                </div>
            </div>
            ,
            document.getElementById('bottom-sheet'))
        : null
}// BottomSheet

export default BottomSheet;