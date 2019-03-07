import { render } from 'enzyme';
import React from 'react';
import { Toast } from '../src';

describe('test toast component', () => {
  it('snapshot ui', () => {
    const wrapper = render(<Toast content="hi,you" iconType="success" visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
