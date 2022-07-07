import {useCallback, useEffect, useState} from "react";
import {isMobile} from "react-device-detect";

function useSelect(eventRef) {
    const [isSelected, setIsSelected] = useState(false);

    const handleOnClickEvents = useCallback((ev) => {
        if (ev.target === eventRef.current) {
            console.log('clicked inside');
        }
        else {
            console.log('clicked outside');
            setIsSelected(false);
            document.removeEventListener('click', handleOnClickEvents);
        }

    }, []);

    function handleOnSelect(ev) {
        if (!isMobile) return;

        if (!isSelected) {
            document.removeEventListener('click', handleOnClickEvents);
            document.addEventListener('click', handleOnClickEvents);

            setIsSelected(true);
        }
    }



    return [isSelected, setIsSelected, handleOnSelect];
}//

export default useSelect;