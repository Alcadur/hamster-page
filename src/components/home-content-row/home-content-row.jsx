import { RoundSkillLevel } from '@/components/round-skill-level/round-skill-level';
import style from './home-content-row.module.css';
import { headerFont } from '@/utils/fonts';
import classNames from 'classnames';

export function HomeContentRow({ children: content, chartColor, rotateChartBy, level, title, className }) {
    const wrapperClasses = classNames(style.homeContentRow, className);

    return <section className={wrapperClasses}>
        <RoundSkillLevel color={chartColor} rotateBy={rotateChartBy}
                         className={style.chart}>
            {level}
        </RoundSkillLevel>
        <h1 className={headerFont.className}>{title}</h1>
        <p>{content}</p>
    </section>;
}