import { useEffect, useRef } from 'react';

interface Props {
    onPress?: () => void,
    onUp?: () => void
}

const useCtrlPressRef = ({ onPress, onUp }: Props) => {
    const keyPressRef: any = useRef(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, []);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey && !keyPressRef.current) {
            keyPressRef.current = true;
            onPress && onPress();
        }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Control' && keyPressRef.current) {
            keyPressRef.current = false;
            onUp && onUp();
        }
    }

    return keyPressRef;
}

export default useCtrlPressRef;
