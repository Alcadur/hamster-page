import style from './hamster-button.module.css';
import { headerFont } from '@/utils/fonts';
import classNames from 'classnames';

/**
 * @param {JSX.Element} label
 * @param {boolean} isActive
 * @returns {JSX.Element}
 * @constructor
 */
export default function HamsterButton({ children: label, isActive }) {
    const classes = classNames(style.btn, headerFont.className, {
        [style.btnActive]: isActive
    });

    return <button className={classes}>
        {label}
    </button>
}