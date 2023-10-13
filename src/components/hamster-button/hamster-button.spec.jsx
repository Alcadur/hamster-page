import HamsterButton from '@/components/hamster-button/hamster-button';
import { render } from '@testing-library/react';
import { headerFont } from '@/utils/fonts';

describe('HamsterButton', function () {
    describe('render', function () {
        function prepare({ isActive } = {}) {
            const { container } = render(<HamsterButton isActive={isActive}>Label</HamsterButton>);

            return { component: container.firstChild };
        }

        describe('when button is not active', function () {
            it('should contain "btn" and font classes', function () {
                const { component } = prepare();

                expect(component).toHaveClass('btn');
                expect(component).toHaveClass(headerFont.className);
                expect(component).not.toHaveClass('btnActive');
            });
        });

        describe('when button is active', function () {
            it('should contain "btn", font and "btnActive" classes', function () {
                const { component } = prepare({ isActive: true });

                expect(component).toHaveClass('btn');
                expect(component).toHaveClass(headerFont.className);
                expect(component).toHaveClass('btnActive');
            })
        });
    });
});