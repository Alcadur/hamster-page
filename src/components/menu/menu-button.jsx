'use client';

import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import style from '@/components/menu/menu.module.css';
import HamsterButton from '@/components/hamster-button/hamster-button';
import Link from 'next/link';

/**
 * @param {React.Component} IconComponent
 * @param {JSX.Element} label
 * @param {string} route
 * @returns {JSX.Element}
 * @constructor
 */
export function MenuButton({ IconComponent, label, route }) {
    const path = usePathname();
    const isActive = path === route;

    const className = classNames({
        [style.activeButton]: isActive
    });

    return <Link href={route}>
        <HamsterButton isActive={isActive} className={className}>
            <IconComponent />
            <span className={style.buttonLabel}>{label}</span>
        </HamsterButton>
    </Link>;
}