'use client';

import classNames from 'classnames';
import style from './round-skill-level.module.css';
import { headerFont } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import {
    ROUND_SKILL_LEVEL_ANIMATION_TIME_IN_MS,
} from '@/components/round-skill-level/round-skill-level';

/**
 * @param {number} value
 * @param {function(): void} chartAnimationStarter
 * @returns {JSX.Element}
 * @constructor
 */
export function RoundSkillLevelLabel({ value }) {
    const labelClasses = classNames(style.label, headerFont.className);


    return <span className={labelClasses}>{value}%</span>;
}

