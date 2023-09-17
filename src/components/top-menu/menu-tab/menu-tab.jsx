'use client';

import "@/app/globals.css";
import styles from "./styles.module.css"
import Link from "next/link";
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

/**
 * @param {JSX.Element} label
 * @param {string} path
 * @returns {JSX.Element}
 * @constructor
 */
function MenuTab({ children: label, path }) {
    const pathname = usePathname();

    return <Link className={classNames(styles.menuTab, {
        [styles.activeTab]: pathname === path
    })} href={path}>
        {label}
    </Link>
}

export { MenuTab };