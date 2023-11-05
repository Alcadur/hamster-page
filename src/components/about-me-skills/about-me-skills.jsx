import { Skill } from '@/components/skill/skill';
import style from './about-me-skills.module.css';
import { allSkillsByKey } from '@/data/skillsUtils';

export function AboutMeSkills() {
    const skills = [
        allSkillsByKey.javaScript,
        allSkillsByKey.css,
        allSkillsByKey.html,
        allSkillsByKey.react,
    ];

    return <section className={style.wrapper}>
        {skills.map(({ name, level }) => <Skill key={name} level={level} className={style.singleSkill}>{name}</Skill>)}
    </section>;
}