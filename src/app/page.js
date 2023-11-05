import { PersonalCard } from '@/components/personal-card/personal-card';
import { HomeContentRow } from '@/components/home-content-row/home-content-row';
import style from './page.module.css';
import { allSkillsByKey } from '@/data/skillsUtils';

function getRandomDeg() {
    return `${Math.random() * 350}deg`;
}


const dataRows = [
    {
        ...allSkillsByKey.javaScript,
        color: '#EFD81D',
        content: 'I’m working so long with javascript that I remember times when jQuery was in mainstream.'
    },
    {
        ...allSkillsByKey.html,
        color: '#E96228',
        content: 'Semantic HTML, flexible and accessible page structure have no secrets from me, I know how to programming in HTML.'
    },
    {
        ...allSkillsByKey.css,
        color: '#2862E9',
        content: 'There are no impossible things in CSS the question always is: how many div`s with ::before and ::after we will need.'
    },
];

export default function Home() {
    return <section className={style.homeWrapper}>
        <PersonalCard className={style.homePersonalCard} />
        <section className={style.dataContainer}>
            {dataRows.map(({ level, name, color, content }) =>
                <HomeContentRow
                    key={name}
                    chartColor={color}
                    level={level}
                    rotateChartBy={getRandomDeg()}
                    title={name}
                    className={style.dataRow}
                >
                    {content}
                </HomeContentRow>)}
        </section>
    </section>;
}
