'use client';

import { usePathname } from 'next/navigation';
import { ROUTE_ABOUT_ME, ROUTE_INDEX } from '@/config/routes';
import { AboutMeLeftMenu } from '@/components/about-me/about-me-left-menu';

/**
 * @returns {JSX.Element<LeftMenuContentTemplate>}
 * @constructor
 */
function LeftMenu() {
    const pathname = usePathname();


    if (pathname === ROUTE_INDEX) {
        return <AboutMeLeftMenu />;
    }

    return (
        <section>

        </section>
    );
}

export { LeftMenu };