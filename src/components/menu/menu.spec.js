import { Menu } from '@/components/menu/menu';
import { usePathname } from 'next/navigation';
import { act, fireEvent, render, within } from '@testing-library/react';
import { ROUTE_ABOUT_ME, ROUTE_CV_GENERATOR, ROUTE_INDEX } from '@/config/routes';
import menuStyle from '/menu.module.css';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('next/navigation');
jest.mock('next/router', () => require('next-router-mock'));

describe('Menu', function () {

    function prepare({ path = '/' } = {}) {
        /**@type {jest.Mock<function(): string>}*/const usePathnameMock = usePathname;
        usePathnameMock.mockReturnValue(path);

        const renderResult = render(<Menu />, { wrapper: MemoryRouterProvider });
        const component = renderResult.container.firstChild;

        return { component, renderResult };
    }

    describe('render', function () {
        it('should render "home", "about me" and "cv generator" buttons', function () {
            const { component, renderResult } = prepare();

            expect(renderResult.getByText('Home'));
            expect(renderResult.getByText('About me'));
            expect(renderResult.getByText('CV generator'));
            expect(component.childNodes).toHaveLength(3);
        });

        describe('when path name is equal to "/"', function () {
            it('should mark home button as active', function () {
                const { renderResult } = prepare({ path: ROUTE_INDEX });
                const activeElements = renderResult.container.getElementsByClassName(menuStyle.activeButton);

                expect(activeElements).toHaveLength(1);
                expect(within(activeElements[0]).getByText('Home'));
            });
        });

        describe('when path name is equal "/about-me"', function () {
            it('should mark home button as active', function () {
                const { renderResult } = prepare({ path: ROUTE_ABOUT_ME });
                const activeElements = renderResult.container.getElementsByClassName(menuStyle.activeButton);

                expect(activeElements).toHaveLength(1);
                expect(within(activeElements[0]).getByText('About me'));
            });
        });

        describe('when path name is equal "/cv-generator"', function () {
            it('should mark home button as active', function () {
                const { renderResult } = prepare({ path: ROUTE_CV_GENERATOR });
                const activeElements = renderResult.container.getElementsByClassName(menuStyle.activeButton);

                expect(activeElements).toHaveLength(1);
                expect(within(activeElements[0]).getByText('CV generator'));
            });
        });
    });

    describe('onClick', function () {
        describe('when user click on home button', function () {
            it('redirect user to home page', function () {
                const { renderResult } = prepare();
                act(() => {
                    mockRouter.setCurrentUrl('/404');
                });

                fireEvent.click(renderResult.getByText('Home'));

                expect(mockRouter.asPath).toEqual(ROUTE_INDEX);
            });
        });

        describe('when user click on about me button', function () {
            it('redirect user to home page', function () {
                const { renderResult } = prepare();
                act(() => {
                    mockRouter.setCurrentUrl('/404');
                });

                fireEvent.click(renderResult.getByText('About me'));

                expect(mockRouter.asPath).toEqual(ROUTE_ABOUT_ME);
            });
        });

        describe('when user click on cv generator button', function () {
            it('redirect user to home page', function () {
                const { renderResult } = prepare();
                act(() => {
                    mockRouter.setCurrentUrl('/404');
                });

                fireEvent.click(renderResult.getByText('CV generator'));

                expect(mockRouter.asPath).toEqual(ROUTE_CV_GENERATOR);
            });
        });
    });
});