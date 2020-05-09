import React from 'react';
import ReactDOM from 'react-dom';

import createDOMPurify from 'dompurify';

import { MarkdownPreviewer, initialEditorInput } from './MarkdownPreviewer';

import 'bulma/css/bulma.min.css';

const purifier = createDOMPurify(window);

ReactDOM.render(
  <React.StrictMode>
    <MarkdownPreviewer initInput={initialEditorInput} purifier={purifier} />
  </React.StrictMode>,
  document.getElementById('root'),
);
