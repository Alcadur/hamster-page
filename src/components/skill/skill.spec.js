import { act, render } from '@testing-library/react';
import { Skill } from '@/components/skill/skill';

describe('Skill', function () {
    function prepare({ label, level } = {}) {
        const renderResult = render(<Skill level={level}>{label}</Skill>);

        return { renderResult };
    }

    beforeEach(function () {
        jest.useFakeTimers();
    });

    afterEach(function () {
        jest.useRealTimers();
    });

    describe('render', function () {
        it('should increasing value from 0', function () {
            const level = 10;
            const { renderResult } = prepare({ level });

            expect(renderResult.findByText('0%'));

            for (let i = 1; i <= level; i++) {
                act(() => {
                    jest.runOnlyPendingTimers();
                });
                expect(renderResult.findByText(i + '%'));
            }
        });
    });
});