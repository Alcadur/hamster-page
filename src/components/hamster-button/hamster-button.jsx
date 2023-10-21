import style from './hamster-button.module.css';
import { headerFont } from '@/utils/fonts';
import classNames from 'classnames';
import Link from 'next/link';

/**
 * @param {JSX.Element} label
 * @param {boolean} isActive
 * @param {'link'|'button'} tag
 * @param {string=''} className
 * @param {string=''} href
 * @returns {JSX.Element}
 * @constructor
 */
export default function HamsterButton({ children: label, isActive, tag = 'button', className = '', href }) {
    const classes = classNames(className, style.btn, headerFont.className, {
        [style.btnActive]: isActive
    });

    if (tag === 'link') {
        return <Link className={classes} href={href}>
            {label}
        </Link>
    }

    return <button className={classes}>
        {label}
    </button>
}