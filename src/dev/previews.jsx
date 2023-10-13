import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';
import HamsterButton from '@/components/hamster-button/hamster-button';
import { BiHomeSmile } from 'react-icons/bi';
import { HomeButton } from '@/components/menu/home-button';
import { AboutMeButton } from '@/components/menu/about-me-button';
import { CvGeneratorButton } from '@/components/menu/cv-generator-button';
import { Menu } from '@/components/menu/menu';

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
        </Previews>
    );
};

export default ComponentPreviews;