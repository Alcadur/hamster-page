'use client';

import style from './round-skill-level.module.css';
import classNames from 'classnames';
import { headerFont } from '@/utils/fonts';
import { useEffect, useState } from 'react';

export const ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS = 1000;

/**
 * @param {number} children
 * @param {string} color
 * @param {string} size
 * @param {angle} rotateBy
 * @returns {JSX.Element}
 * @constructor
 */
export function RoundSkillLevel({ children, color, size, rotateBy } = {}) {
    const labelClasses = classNames(style.label, headerFont.className);
    const numberValue = +children;
    const frameTime = ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS / numberValue;
    const [currentValue, setCurrentValue] = useState(0);

    const CHART_ANIMATION_BOUNCE_1_VALUE = numberValue - Math.min(numberValue * .2, 10);
    const CHART_ANIMATION_BOUNCE_2_VALUE = numberValue - Math.min(numberValue * .12, 6);
    const CHART_ANIMATION_BOUNCE_3_VALUE = numberValue - Math.min(numberValue * .06, 3);

    useIntervalNumberIncrease({
        currentValue,
        valueSetter: setCurrentValue,
        maxValue: numberValue,
        frameTime
    });

    return <div className={style.container} style={{
        '--animation-duration': `${ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS}ms`,
        '--color': color,
        '--size': size,
        '--value': numberValue,
    }}>
        <svg data-testid="svg-element" viewBox="0 0 36 36" style={{
            '--animation-bounce-step-1': CHART_ANIMATION_BOUNCE_1_VALUE,
            '--animation-bounce-step-2': CHART_ANIMATION_BOUNCE_2_VALUE,
            '--animation-bounce-step-3': CHART_ANIMATION_BOUNCE_3_VALUE,
            '--rotate-by': rotateBy
        }}>
            <path className={style.value}
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
        <span className={labelClasses}>{currentValue}%</span>
    </div>;
}

function useIntervalNumberIncrease({ currentValue, valueSetter, maxValue, frameTime }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentValue < maxValue) {
                valueSetter(value => value + 1);
            }
        }, frameTime);

        return () => clearTimeout(timeout);
    }, [currentValue, frameTime, maxValue, valueSetter]);
}