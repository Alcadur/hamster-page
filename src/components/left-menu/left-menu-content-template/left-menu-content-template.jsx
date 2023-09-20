import  styles from './styles.module.css';

/**
 * @param {React.ReactElement} content
 * @param {string} title
 * @returns {React.ReactElement}
 * @constructor
 */
function LeftMenuContentTemplate({ children: content, title }) {
    return (
        <section>
            <header className={styles.header}>{title}</header>
            {content}
        </section>
    );
}

export { LeftMenuContentTemplate };