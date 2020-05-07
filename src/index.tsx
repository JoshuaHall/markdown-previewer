import React from 'react';
import ReactDOM from 'react-dom';

import createDOMPurify from 'dompurify';

import { MarkdownPreviewer } from './MarkdownPreviewer';

const initialEditorInput: string = `# This is a header (H1)

## This is a sub header (H2)

This is a [link to Google](https://google.com/)

This sentence has \`inline code\` in it

The following is a code block
\`\`\`javascript
console.log("Hello, world!");
\`\`\`

- these
- are
- list
- items

> This is a blockquote

This is an image
![freeCodeCamp logo](https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg)

**This is bolded**

*This is italicized*`;

const purifier = createDOMPurify(window);

ReactDOM.render(
  <React.StrictMode>
    <MarkdownPreviewer initInput={initialEditorInput} purifier={purifier} />
  </React.StrictMode>,
  document.getElementById('root'),
);
