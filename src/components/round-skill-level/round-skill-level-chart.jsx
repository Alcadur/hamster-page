'use client';

import classNames from 'classnames';
import style from './round-skill-level.module.css';
import { useEffect, useRef } from 'react';
import {
    ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS,
    useSvgAnimationControl
} from '@/components/round-skill-level/round-skill-level';

/**
 * @param {number} value
 * @param {angle} rotateBy
 * @param {function(function): void} animationStartHandlerSetter
 * @returns {JSX.Element}
 * @constructor
 */
export function RoundSkillLevelChart({ value, rotateBy, shouldPlayAnimation } = {}) {
    const chartRef = useRef();
    const chartClasses = classNames(style.value);
    const CHART_ANIMATION_BOUNCE_1_VALUE = value - Math.min(value * .2, 10);
    const CHART_ANIMATION_BOUNCE_2_VALUE = value - Math.min(value * .12, 6);
    const CHART_ANIMATION_BOUNCE_3_VALUE = value - Math.min(value * .06, 3);

    if (shouldPlayAnimation) {
        chartRef.current.classList.add(style.play)
    }

    return <svg data-testid="svg-element" viewBox="0 0 36 36" style={{
        '--animation-duration': `${ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS}ms`,
        '--animation-bounce-step-1': CHART_ANIMATION_BOUNCE_1_VALUE,
        '--animation-bounce-step-2': CHART_ANIMATION_BOUNCE_2_VALUE,
        '--animation-bounce-step-3': CHART_ANIMATION_BOUNCE_3_VALUE,
        '--rotate-by': rotateBy
    }}>
        <path ref={chartRef} className={chartClasses}
              d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>;
}