import {useCallback, useEffect, useState} from "react";

function useHover(ref, onHoverCallback = ()=>{}, initialHoverState = false) {
    const [isHover, setIsHover] = useState(initialHoverState);

    if (initialHoverState) {
        console.log('keeping buttons activated');
    }

    const handleMouseEnter = useCallback(() => {
        setIsHover(true);
        onHoverCallback(isHover);
    }, [isHover, setIsHover]);

    const handleMouseLeave = useCallback(() => {
        console.log('leaving mouse');
        setIsHover(false);
        onHoverCallback(isHover);
    }, [isHover, setIsHover]);


    useEffect(() => {
        if (ref.current) {
            ref.current.removeEventListener('mouseenter', handleMouseEnter);
            ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }

        if (ref.current) {

            ref.current.addEventListener('mouseenter', handleMouseEnter);
            ref.current.addEventListener('mouseleave', handleMouseLeave);


            let mouseenter = new Event('mouseenter', {
                bubbles: true,
                // cancelable: true
            });

            if (initialHoverState) {
                console.log('triggering mouse enter');
                ref.current.dispatchEvent(mouseenter);
            }

        }

    }, [ref, handleMouseEnter, handleMouseLeave, initialHoverState]);


    return [isHover, setIsHover];
}//

export default useHover;