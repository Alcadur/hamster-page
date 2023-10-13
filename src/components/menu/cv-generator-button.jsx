import { HiOutlineDocumentText } from 'react-icons/hi2';
import { ROUTE_CV_GENERATOR } from '@/config/routes';
import { MenuButton } from '@/components/menu/menu-button';

export function CvGeneratorButton() {
    return <MenuButton label="CV generator" IconComponent={HiOutlineDocumentText} route={ROUTE_CV_GENERATOR} />
}