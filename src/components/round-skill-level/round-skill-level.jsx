'use client';

import style from './round-skill-level.module.css';
import { RoundSkillLevelChart } from '@/components/round-skill-level/round-skill-level-chart';
import { RoundSkillLevelLabel } from '@/components/round-skill-level/round-skill-level-label';
import { useEffect, useRef, useState } from 'react';

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
    const numberValue = +children;
    const [currentValue, setCurrentValue] = useState(0);
    const frameTime = ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS / numberValue;

    useIntervalNumberIncrease({
        currentValue,
        valueSetter: setCurrentValue,
        maxValue: numberValue,
        frameTime
    });

    return <div className={style.container} style={{
        '--color': color,
        '--size': size,
        '--value': currentValue,
    }}>
        <RoundSkillLevelChart value={currentValue} rotateBy={rotateBy} shouldPlayAnimation={currentValue === numberValue} />
        <RoundSkillLevelLabel value={currentValue} />
    </div>;
}

function useIntervalNumberIncrease({ currentValue, valueSetter, maxValue, frameTime }) {
    useEffect(() => {
        const timeout = window.setTimeout(() => {
            if (currentValue < maxValue) {
                valueSetter(value => value + 1);
            }
        }, frameTime);

        return () => clearTimeout(timeout);
    }, [currentValue, frameTime, maxValue, valueSetter]);
}