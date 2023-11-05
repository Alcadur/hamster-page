'use client';

import style from './round-skill-level.module.css';
import { RoundSkillLevelChart } from '@/components/round-skill-level/round-skill-level-chart';
import { RoundSkillLevelLabel } from '@/components/round-skill-level/round-skill-level-label';
import { useState } from 'react';
import classNames from 'classnames';
import { useIntervalNumberIncrease } from '@/hooks/useIntervalNumberIncrease';

export const ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS = 1000;

/**
 * @param {number} children
 * @param {string} color
 * @param {angle} rotateBy
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
export function RoundSkillLevel({ children, color, rotateBy, className } = {}) {
    const numberValue = +children;
    const [currentValue, setCurrentValue] = useState(0);
    const frameTime = ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS / numberValue;
    const containerClassName = classNames(style.container, className);

    useIntervalNumberIncrease({
        currentValue,
        valueSetter: setCurrentValue,
        maxValue: numberValue,
        frameTime
    });

    return <div className={containerClassName} style={{
        '--color': color,
        '--value': currentValue
    }}>
        <RoundSkillLevelChart value={currentValue} rotateBy={rotateBy}
                              shouldPlayAnimation={currentValue === numberValue}
                              parentStyle={{ 'flex-shrink': 0 }}
        />
        <RoundSkillLevelLabel value={currentValue} />
    </div>;
}