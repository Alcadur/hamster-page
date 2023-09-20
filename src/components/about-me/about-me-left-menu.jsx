import { LeftMenuContentTemplate } from '@/components/left-menu/left-menu-content-template/left-menu-content-template';
import { Skills } from '@/components/about-me/skills';

function AboutMeLeftMenu () {
    return <LeftMenuContentTemplate title="Skills">
        <Skills />
    </LeftMenuContentTemplate>
}

export { AboutMeLeftMenu };