import classNames from "classnames";
import "@/app/globals.css";
import { MenuTab } from "@/components/top-menu/menu-tab/menu-tab";

function TopMenu({ className = "" }) {
    return <nav className={classNames(className)}>
        <MenuTab>Readme</MenuTab>
        <MenuTab>CV generator</MenuTab>
        <MenuTab>Tab 3</MenuTab>
        <MenuTab>Tab 4</MenuTab>
    </nav>
}

export { TopMenu };