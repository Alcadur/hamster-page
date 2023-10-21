'use client';

import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import style from '@/components/menu/menu.module.css';
import HamsterButton from '@/components/hamster-button/hamster-button';

/**
 * @param {IconType} IconComponent
 * @param {JSX.Element} label
 * @param {string} route
 * @returns {JSX.Element}
 * @constructor
 */
export function MenuButton({ IconComponent, label, route }) {
    const path = usePathname();
    const isActive = path === route;

    const className = classNames(style.button,
        style.menuButton,
        {
            [style.activeButton]: isActive
        }
    );

    return <HamsterButton isActive={isActive} className={className} href={path} tag="link">
        <IconComponent className={style.buttonIcon} />
        <span className={style.buttonLabel}>{label}</span>
    </HamsterButton>;
}