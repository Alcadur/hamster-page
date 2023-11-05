import style from './skill.module.css';
import classNames from 'classnames';

/**
 * @param {string} label
 * @param {string} className
 * @param {number} level
 * @returns {JSX.Element}
 * @constructor
 */
export function Skill({ children: label, className, level }) {
    const wrapperClasses = classNames(style.skillWrapper, className);

    return <div className={wrapperClasses}>
        <h5>{label}</h5>
        <div className={style.levelWrapper} style={{ '--level-value': `${level}%` }}>
            <div className={style.levelBar}></div>
            <div className={style.levelValue}>
                <div className={style.levelHelpLineLeft}></div>
                {level}%
                <div className={style.levelHelpLineRight}></div>
            </div>
        </div>
    </div>
}