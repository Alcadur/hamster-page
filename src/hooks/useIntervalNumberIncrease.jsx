import { useEffect } from 'react';

export function useIntervalNumberIncrease({ currentValue, valueSetter, maxValue, frameTime }) {
    useEffect(() => {
        const timeout = window.setTimeout(() => {
            if (currentValue < maxValue) {
                valueSetter(value => value + 1);
            }
        }, frameTime);

        return () => clearTimeout(timeout);
    }, [currentValue, frameTime, maxValue, valueSetter]);
}