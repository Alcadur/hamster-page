import { act } from '@testing-library/react';

export function runTimersUntilQueueEmpty() {
    while (jest.getTimerCount()) {
        act(() => jest.runOnlyPendingTimers());
    }
}