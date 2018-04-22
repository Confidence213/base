import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
}

global.expect = expect;
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;

copyProps(window, global);

function noop() {
    return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;