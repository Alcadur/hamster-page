import allSkills from './skills.json';

const skillNameKeyMap = {
    'JavaScript': 'javaScript'
};

export const allSkillsArray = structuredClone(allSkills);

export const allSkillsByKey = allSkillsArray.reduce((acc, skill) => {
    const key = skillNameKeyMap[skill.name] || skill.name.toLowerCase();
    acc[key] = skill;

    return acc;
}, {});