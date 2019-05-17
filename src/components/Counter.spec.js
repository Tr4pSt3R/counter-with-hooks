import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Counter from "./Counter";

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Counter />', () => {
  it('should initially have a counter value of zero', () => {
    const wrapper = shallow(<Counter />);
    const countVal = wrapper.find('.counter-value');

    expect(countVal.text()).toEqual('0');
  });

  it('should increment by one when I click on increment button', () => {
    const wrapper = shallow(<Counter/>);
    const incrementBtn = wrapper.find('button.incrementBtn');

    incrementBtn.simulate('click');

    const countVal = wrapper.find('.counter-value');

    expect(countVal.text()).toEqual('1');
  });

  it('should decrement by one when I click on the decrement button', () => {
    const wrapper = shallow(<Counter/>);
    wrapper.find('button.decrementBtn').simulate('click');

    const countVal = wrapper.find('.counter-value');

    expect(countVal.text()).toEqual('-1');
  });
});