import { BiHomeSmile } from 'react-icons/bi';
import { ROUTE_INDEX } from '@/config/routes';
import { MenuButton } from '@/components/menu/menu-button';

export function HomeButton() {
    return <MenuButton label="Home" IconComponent={BiHomeSmile} route={ROUTE_INDEX} />
}