import React, { useState, ReactElement } from 'react';
import marked from 'marked';
import { DOMPurifyI } from 'dompurify';

interface MarkdownPreviewerProps {
  initInput: string;
  purifier: DOMPurifyI;
}

marked.setOptions({
  breaks: true,
});

export function MarkdownPreviewer({
  initInput,
  purifier,
}: MarkdownPreviewerProps): ReactElement<MarkdownPreviewerProps> {
  const [input, setInput] = useState(initInput);

  const unsanitized = marked(input);

  const purified = purifier.sanitize(unsanitized);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value);
  }

  return (
    <div className="columns">
      <div className="column">
        <textarea
          id="editor"
          className="textarea"
          onChange={handleChange}
          value={input}
          rows={26}
          cols={100}
        ></textarea>
      </div>
      <div className="column">
        <div id="preview" className="content" dangerouslySetInnerHTML={{ __html: purified }}></div>
      </div>
    </div>
  );
}

export const initialEditorInput = `# This is a header (H1)

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
