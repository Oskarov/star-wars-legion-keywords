import React, {useEffect, useRef} from 'react';

const useResizeObserver = (element:React.MutableRefObject<any>, callback:()=>void) => {

    const current = element && element.current;

    const observer = useRef(null);

    useEffect(() => {
        // if we are already observing old element
        if (observer && observer.current && current) {
            // @ts-ignore
            observer.current.unobserve(current);
        }
        const resizeObserverOrPolyfill =  ResizeObserver;
        // @ts-ignore
        observer.current = new resizeObserverOrPolyfill(callback);
        observe();

        return () => {
            if (observer && observer.current && element &&
                element.current) {
                // @ts-ignore
                observer.current.unobserve(element.current);
            }
        };
    }, [current]);

    const observe = () => {
        if (element && element.current && observer.current && observer.current) {
            // @ts-ignore
            observer.current.observe(element.current);
        }
    };

};

export default useResizeObserver;