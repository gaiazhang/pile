import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../src';

describe('Switch suite', () => {
  it('render a Switch', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper).toMatchSnapshot();
  });
});
