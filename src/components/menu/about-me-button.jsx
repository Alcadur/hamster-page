import { SiAboutdotme } from 'react-icons/si';
import { ROUTE_ABOUT_ME } from '@/config/routes';
import { MenuButton } from '@/components/menu/menu-button';

export function AboutMeButton() {
    return <MenuButton label="About me" IconComponent={SiAboutdotme} route={ROUTE_ABOUT_ME} />
}