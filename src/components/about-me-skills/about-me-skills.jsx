import { Skill } from '@/components/skill/skill';
import style from './about-me-skills.module.css';

export function AboutMeSkills() {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'HTML', level: 70 },
        { name: 'React', level: 96 },
    ];

    return <section className={style.wrapper}>
        {skills.map(({ name, level }) => <Skill key={name} level={level} className={style.singleSkill}>{name}</Skill>)}
    </section>;
}