import styles from './skill.module.css';

function Skill({ name, level }) {
    return (
        <>
            <dt>Skill: {name}</dt>
            <dd className={styles.levelBar}  data-lvl={level} style={{width: `${level * 100}%`}}>LVL: {level}</dd>
        </>
    );
}

export { Skill };