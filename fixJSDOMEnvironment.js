import JSDOMEnvironment from 'jest-environment-jsdom';

// https://github.com/jsdom/jsdom/issues/3363
export default class FixJSDOMEnvironment extends JSDOMEnvironment {
    constructor(...args) {
        super(...args);

        // FIXME https://github.com/jsdom/jsdom/issues/3363
        this.global.structuredClone = structuredClone;
    }
}