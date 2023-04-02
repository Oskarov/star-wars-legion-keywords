import { RefObject, useEffect } from 'react';

export default function useClickOutside(fnc: (...args: any[]) => void, ref?: RefObject<HTMLDivElement>, stayOpen?: boolean) {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (!!ref && ref.current && !ref.current.contains(e.target as Node) && !stayOpen) {
                fnc();
            }
        }

        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
        }
    }, [stayOpen]);
}
