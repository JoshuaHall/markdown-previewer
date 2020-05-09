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
    <div className="container">
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
    </div>
  );
}
