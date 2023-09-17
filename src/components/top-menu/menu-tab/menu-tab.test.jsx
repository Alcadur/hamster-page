import { create } from 'react-test-renderer';
import { MenuTab } from '@/components/top-menu/menu-tab/menu-tab';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation');

describe('menu-tab', function () {
    function prepare({ path = '', usePathnameValue = '' } = {}) {
        /**@type jest.Mock*/ const usePathnameMock = usePathname;
        usePathnameMock.mockReturnValueOnce(usePathnameValue);

        const component = create(<MenuTab path={path}>link</MenuTab>);

        return { component, usePathname };
    }



    describe('when current path is equal button path', function () {
        it('should add "activeTab" and "menuTab" class to the button', function () {
            const { component } = prepare({ path: '/home', usePathnameValue: '/home' });

            const classes = component.toJSON().props.className.split(' ');

            expect(classes).toContain('menuTab');
            expect(classes).toContain('activeTab');
            expect(classes).toHaveLength(2);
        });
    });

    describe('when current path not match to button path', function () {
        it('should have only "menuTab" class', function () {
            const { component } = prepare({ path: '/game', usePathnameValue: '/home' });

            const classes = component.toJSON().props.className.split(' ');

            expect(classes).toContain('menuTab');
            expect(classes).not.toContain('activeTab');
            expect(classes).toHaveLength(1);
        });
    });
});