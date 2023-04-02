import React, { useEffect } from 'react';

const useEventListener = (target:React.MutableRefObject<any>, type:string, listener:()=>void, ...options:any) => {
    useEffect(
        () => {
            const targetIsRef = target.hasOwnProperty('current');
            // @ts-ignore
            const currentTarget = targetIsRef ? target.current : target;
            if (currentTarget)
                currentTarget.addEventListener(type, listener, ...options);
            return () => {
                if (currentTarget)
                    currentTarget.removeEventListener(type, listener, ...options);
            };
        },
        [target, type, listener, options]
    );
};

export default useEventListener;