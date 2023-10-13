import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';
import HamsterButton from '@/components/hamster-button/hamster-button';
import { BiHomeSmile } from 'react-icons/bi';

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
        </Previews>
    );
};

export default ComponentPreviews;