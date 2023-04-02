import { useRef } from 'react';

export default function useTimeout(offsetTime?: number) {
    const ref = useRef<ReturnType<typeof setTimeout>>();

    return (fnc: (...args: any[]) => void) => {
        if (ref.current)
            clearTimeout(ref.current);

        ref.current = setTimeout(fnc, offsetTime || 500);
    }
}
