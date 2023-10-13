/**
 * @param {JSX.Element} children
 * @param {boolean} shouldRender
 * @returns {JSX.Element}
 * @constructor
 */
export default function ConditionalRender({ children, renderWhen: shouldRender }) {
    if (shouldRender) {
        return <>{children}</>;
    }

    return <></>;
}