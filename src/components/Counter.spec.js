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
});