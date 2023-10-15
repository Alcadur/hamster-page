import { act, render } from '@testing-library/react';
import {
    ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS,
    RoundSkillLevel
} from '@/components/round-skill-level/round-skill-level';

describe('RoundSkillLevel', function () {

    function prepare({ value, color, size } = {}) {
        const renderResult = render(<RoundSkillLevel color={color} size={size}>{value}</RoundSkillLevel>);

        return { renderResult };
    }

    beforeEach(function () {
        jest.useFakeTimers();
    });

    afterEach(function () {
        jest.useRealTimers();
    });

    describe('render', function () {
        it('should increasing value from 0', function () {
            const value = 10;
            const { renderResult } = prepare({ value });
            const frameTime = ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS / value;

            expect(renderResult.findByText('0%'));
            for (let i = 1; i <= value; i++) {
                act(() => {
                    jest.advanceTimersByTime(frameTime);
                });
                expect(renderResult.findByText(i + '%'));
            }
        });

        it('should set correct animation step for low value', function () {
            const value = 1;
            const EXPECTED_STEP_1_VALUE = '0.8';
            const EXPECTED_STEP_2_VALUE = '0.88';
            const EXPECTED_STEP_3_VALUE = '0.94';

            const { renderResult } = prepare({ value });
            const svgComputedStyle = getComputedStyle(renderResult.getByTestId('svg-element'));

            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-1')).toEqual(EXPECTED_STEP_1_VALUE);
            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-2')).toEqual(EXPECTED_STEP_2_VALUE);
            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-3')).toEqual(EXPECTED_STEP_3_VALUE);
        });

        it('should set correct animation step for average value', function () {
            const value = 45;
            const EXPECTED_STEP_1_VALUE = '36';
            const EXPECTED_STEP_2_VALUE = '39.6';
            const EXPECTED_STEP_3_VALUE = '42.3';

            const { renderResult } = prepare({ value });
            const svgComputedStyle = getComputedStyle(renderResult.getByTestId('svg-element'));

            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-1')).toEqual(EXPECTED_STEP_1_VALUE);
            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-2')).toEqual(EXPECTED_STEP_2_VALUE);
            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-3')).toEqual(EXPECTED_STEP_3_VALUE);
        });

        it('should set correct animation step for big value', function () {
            const value = 90;
            const EXPECTED_STEP_1_VALUE = '80';
            const EXPECTED_STEP_2_VALUE = '84';
            const EXPECTED_STEP_3_VALUE = '87';

            const { renderResult } = prepare({ value });
            const svgComputedStyle = getComputedStyle(renderResult.getByTestId('svg-element'));

            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-1')).toEqual(EXPECTED_STEP_1_VALUE);
            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-2')).toEqual(EXPECTED_STEP_2_VALUE);
            expect(svgComputedStyle.getPropertyValue('--animation-bounce-step-3')).toEqual(EXPECTED_STEP_3_VALUE);
        });
    });
});