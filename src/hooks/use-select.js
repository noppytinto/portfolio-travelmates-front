import {useCallback, useState} from "react";


function useSelect(targetElementRef) {
    const [isSelect, setIsSelect] = useState(false);

    const handleOnClick = useCallback((ev) => {
        if ( ! targetElementRef.current) return;

        const isTargetElement = targetElementRef.current.contains(ev.target);

        if (isTargetElement) {
            console.log('clicked inside element');
        }
        else {
            console.log('clicked outside element');
            setIsSelect(false);
            document.removeEventListener('click', handleOnClick);
        }

    }, [setIsSelect]);

    function triggerSelection(ev) {
        // console.log('hook setup');

        // Add event listener to current clicked element.
        // The event listener, is used to listens for outside clicks.
        if (!isSelect) {
            document.removeEventListener('click', handleOnClick);
            document.addEventListener('click', handleOnClick);

            setIsSelect(true);
        }
    }

    function triggerUnselection(ev) {
        // console.log('hook setup');

        // Add event listener to current clicked element.
        // The event listener, is used to listens for outside clicks.
        document.removeEventListener('click', handleOnClick);
        setIsSelect(false);
    }

    return [isSelect, setIsSelect, triggerSelection, triggerUnselection];
}//

export default useSelect;