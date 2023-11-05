import { AboutMePortrait } from '@/components/about-me-portrait/about-me-portrait';
import style from './page.module.css';
import { AboutMeSkills } from '@/components/about-me-skills/about-me-skills';
import HamsterButton from '@/components/hamster-button/hamster-button';
import { GiSkills } from 'react-icons/gi';

export default function AboutMe() {
    return <section className={style.aboutMeWrapper}>
            <section className={style.storyWrapper}>
                <h1>Short store</h1>
                <p>
                    I have been a developer for over 12 years and over 10 years I’m focused on
                    improving my Front-end skills. In my long journey, I worked for small startups and
                    large companies like LPP or Boeing.
                </p>

                <p>
                    I started with pure JavaScript so I am familiar with concepts such as prototype
                    inheritance or events binding but that I’m as old as dinosaurs doesn’t mean I’m
                    stay in the Stone Age.
                </p>

                <p>
                    I have experience in forgotten frameworks like jQuery and AngularJS, in rare ones like Aurelia and
                    EmberJS and of course in Angular 2+, React and Vue. After tasting
                    so many possibilities I decided to master React.
                </p>
            </section>
            <section className={style.skillsContainer}>
                <h1>Skills</h1>
                <AboutMeSkills />
                <HamsterButton className={style.skillsButton}><GiSkills /> Show all skills</HamsterButton>
            </section>
        <AboutMePortrait />
    </section>;
}