import HamsterButton from '@/components/hamster-button/hamster-button';
import { render } from '@testing-library/react';
import { headerFont } from '@/utils/fonts';

describe('HamsterButton', function () {
    describe('render', function () {
        function prepare({ isActive, tag } = {}) {
            const { container } = render(<HamsterButton isActive={isActive} tag={tag} href="/">Label</HamsterButton>);

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
            });
        });

        describe('when "tag" property is undefined', function () {
            it('should render component as button', function () {
                const { component } = prepare({ tag: undefined });

                expect(component.nodeName.toLowerCase()).toEqual('button');
            });
        });

        describe('when "tag" property is "link"', function () {
            it('should render component as a', function () {
                const { component } = prepare({ tag: 'link' });

                expect(component.nodeName.toLowerCase()).toEqual('a');
            });
        });

        describe('when "tag" property is not "a" or "button"', function () {
            it('should render component as button', function () {
                const { component } = prepare({ tag: 'label' });

                expect(component.nodeName.toLowerCase()).toEqual('button');
            });
        });
    });
});