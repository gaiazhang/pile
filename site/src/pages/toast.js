import * as React from 'react';
import docMd from '../docs/toast.md';
import Markdown from '../markdown';

const Toast = () => {
  console.log('page toast');
  return <div><Markdown input={docMd} /></div>;
};

export default Toast;
