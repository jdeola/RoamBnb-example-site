import { useState, useEffect, useMemo } from 'react';

// observes element on screen with ref={targetRef}
// must include in component: 
    // const targetRef = useRef(null);
    // const isVisible = useElementOnScreen({
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: .5
    // }, targetRef);

const useElementOnScreen = (options, targetRef) => {
    const [ isVisible, setIsVisible ] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const optionsMemo = useMemo(() => {
        return options
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if(currentTarget) observer.observe(currentTarget);

        return () => {
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, optionsMemo]);

    return isVisible;
}

export default useElementOnScreen;