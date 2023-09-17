import classNames from "classnames";
import "@/app/globals.css";
import { MenuTab } from "@/components/top-menu/menu-tab/menu-tab";
import { ROUTE_ABOUT_ME, ROUTE_INDEX } from '@/config/routes';

function TopMenu({ className = "" }) {
    return <nav className={classNames(className)}>
        <MenuTab path={ROUTE_INDEX}>Readme</MenuTab>
        <MenuTab path={ROUTE_ABOUT_ME}>CV generator</MenuTab>
    </nav>
}

export { TopMenu };