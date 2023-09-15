import styles from "./styles.module.css"
import classNames from "classnames";

function MenuTab({ children: label }) {
    return <button className={classNames(styles.menuTab)}>
        {label}
    </button>
}

export { MenuTab };