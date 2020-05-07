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
    <div>
      <textarea id="editor" onChange={handleChange} value={input} rows={26} cols={100}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: purified }}></div>
    </div>
  );
}
