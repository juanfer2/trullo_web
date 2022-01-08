import React from 'react';
import Markdown from '@components/markdown';

function DescriptionMarkdown({ markdown }: { markdown: string }) {
  return <Markdown markdown={markdown}/>;
}

export default DescriptionMarkdown;
