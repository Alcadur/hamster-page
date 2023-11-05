'use client';

import style from './skill.module.css';
import classNames from 'classnames';
import { useIntervalNumberIncrease } from '@/hooks/useIntervalNumberIncrease';
import { useState } from 'react';

export const SKILL_LEVEL_ANIMATION_TIME_IN_MS = 1000;

/**
 * @param {string} label
 * @param {string} className
 * @param {number} level
 * @returns {JSX.Element}
 * @constructor
 */
export function Skill({ children: label, className, level }) {
    const [currentLevel, setCurrentLevel] = useState(0)
    const wrapperClasses = classNames(style.skillWrapper, {
        [style.playSkillBouncing]: currentLevel === level
    }, className);

    useIntervalNumberIncrease({
        frameTime: SKILL_LEVEL_ANIMATION_TIME_IN_MS/level,
        currentValue: currentLevel,
        maxValue: level,
        valueSetter: setCurrentLevel
    });

    return <div className={wrapperClasses}>
        <h5>{label}</h5>
        <div className={style.levelWrapper} style={{
            '--level-value': `${currentLevel}%`
        }}>
            <div className={style.levelBar}></div>
            <div className={style.levelValue}>
                <div className={style.levelHelpLineLeft}></div>
                {currentLevel}%
                <div className={style.levelHelpLineRight}></div>
            </div>
        </div>
    </div>
}