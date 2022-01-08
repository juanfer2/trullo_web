import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Button } from 'antd';

function DescriptionEdit({ setOpenEdit }: { setOpenEdit: Function }) {
  const [markdown, setmarkdown] = useState<string>('');
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  return (
    <div className="description-edit">
      <div className="visualizer">
        <Button type={openPreview ? 'text' : 'primary'} onClick={() => setOpenPreview(false)}>
          Edit file
        </Button>

        <Button type={openPreview ? 'primary' : 'text'} onClick={() => setOpenPreview(true)}>
          Preview
        </Button>
      </div>

      <div>
        {openPreview ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        ) : (
          <textarea
            rows={10}
            className="input-description"
            value={markdown}
            onChange={(e) => setmarkdown(e.target.value)}
          />
        )}
      </div>

      <div className="actions-edit">
        <Button shape="round" type="primary">
          save
        </Button>
        <Button shape="round" onClick={() => setOpenEdit(false)}>
          cancel
        </Button>
      </div>
    </div>
  );
}

export default DescriptionEdit;
