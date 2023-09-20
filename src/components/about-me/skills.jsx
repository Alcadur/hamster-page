import { Skill } from '@/components/about-me/skill';

function Skills () {
    /**
     *
     * @type {[{level: number<0, 1>, name: string}]}
     */
    const skills = [{
        name: 'CSS',
        level: .85
    }, {
        name: 'JS',
        level: .95
    }, {
        name: 'Docker',
        level: .5
    }];

    return (
        <dl>
            {skills.map( ({ name, level }) => <Skill key={name} name={name} level={level} />)}
        </dl>
    )
}

export { Skills };