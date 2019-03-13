import { render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from '../src';

describe('test toast component', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn(element => element);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });
  it('snapshot ui', () => {
    const wrapper = render(<Toast content="hi,you" iconType="success" visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
