/**
 * Created by Indra on 4/22/2018.
 */
import React from 'react';
import App from './App';
import UserInfo from './components/UserInfo/UserInfo';

describe('App Component', () => {
    it('renders the UserInfo wrapper', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(UserInfo)).to.have.length(1);
        console.log(wrapper);
        const comp = mount(<App/>);
        console.log(comp.setState());
        const comp1 = render(<App/>);
        console.log(comp1.state);
        // expect(wrapper.getState().name).equals('Indra Jeet');
    });
    it('calls componentDidMount', () => {
        sinon.spy(App.prototype, 'componentDidMount');

        const wrapper = mount(<App />);
        expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});