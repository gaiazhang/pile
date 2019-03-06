import * as React from 'react';
import docMd from '../docs/input.md';
import Markdown from '../markdown';

const Input = () => (
  <div style={{ backgroundColor: '#f5f5f9' }}>
    <Markdown input={docMd} />
  </div>
);

export default Input;
