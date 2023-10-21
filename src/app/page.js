import { PersonalCard } from '@/components/personal-card/personal-card';
import { HomeContentRow } from '@/components/home-content-row/home-content-row';
import style from './page.module.css';

function getRandomDeg() {
    return `${Math.random() * 350}deg`;
}

const dataRows = [
    {
        title: 'JavaScript',
        color: '#EFD81D',
        level: 90,
        content: 'I’m working so long with javascript that I remember times when jQuery was in mainstream.'
    },
    {
        title: 'HTML',
        color: '#E96228',
        level: 85,
        content: 'Semantic HTML, flexible and accessible page structure have no secrets from me, I know how to programming in HTML.'
    },
    {
        title: 'CSS',
        color: '#2862E9',
        level: 85,
        content: 'There are no impossible things in CSS the question always is: how many div`s with ::before and ::after we will need.'
    },
];

export default function Home() {
    return <section className={style.homeWrapper}>
        <PersonalCard className={style.homePersonalCard} />
        <section className={style.dataContainer}>
            {dataRows.map(({ level, title, color, content }) =>
                <HomeContentRow
                    key={title}
                    chartColor={color}
                    level={level}
                    rotateChartBy={getRandomDeg()}
                    title={title}
                    className={style.dataRow}
                >
                    {content}
                </HomeContentRow>)}
        </section>
    </section>;
}
