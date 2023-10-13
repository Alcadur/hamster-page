import { HomeButton } from '@/components/menu/home-button';
import { AboutMeButton } from '@/components/menu/about-me-button';
import { CvGeneratorButton } from '@/components/menu/cv-generator-button';

export function Menu() {
    return <nav>
        <HomeButton />
        <AboutMeButton />
        <CvGeneratorButton />
    </nav>;
}