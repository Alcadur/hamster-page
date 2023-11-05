import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';
import HamsterButton from '@/components/hamster-button/hamster-button';
import { BiHomeSmile } from 'react-icons/bi';
import { HomeButton } from '@/components/menu/home-button';
import { AboutMeButton } from '@/components/menu/about-me-button';
import { CvGeneratorButton } from '@/components/menu/cv-generator-button';
import { Menu } from '@/components/menu/menu';
import { PersonalCard } from '@/components/personal-card/personal-card';
import { RoundSkillLevel } from '@/components/round-skill-level/round-skill-level';
import { HomeContentRow } from '@/components/home-content-row/home-content-row';
import { AboutMePortrait } from '@/components/about-me-portrait/about-me-portrait';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/HamsterButton">
                <HamsterButton>
                    <BiHomeSmile /> Home
                </HamsterButton>
                <HamsterButton isActive={true}>
                    <BiHomeSmile /> Home
                </HamsterButton>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews />
            </ComponentPreview>
            <ComponentPreview path="/HomeButton">
                <HomeButton />
            </ComponentPreview>
            <ComponentPreview path="/AboutMeButton">
                <AboutMeButton />
            </ComponentPreview>
            <ComponentPreview path="/GeneratorButton">
                <CvGeneratorButton />
            </ComponentPreview>
            <ComponentPreview path="/Menu">
                <Menu />
            </ComponentPreview>
            <ComponentPreview path="/PersonalCard">
                <PersonalCard />
            </ComponentPreview>
            <ComponentPreview path="/RoundSkillLevel">
                <RoundSkillLevel color='blue'>5</RoundSkillLevel>
                <br/>
                <RoundSkillLevel color='red' size='150px'>45</RoundSkillLevel>
                <br/>
                <RoundSkillLevel color='green' size='150px' rotateBy='89deg'>80</RoundSkillLevel>
            </ComponentPreview>
            <ComponentPreview path="/HomeContentRow">
                <HomeContentRow />
            </ComponentPreview>
            <ComponentPreview path="/AboutMePortrait">
                <AboutMePortrait />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;