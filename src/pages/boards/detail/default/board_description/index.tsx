import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { FileTextFilled, EditFilled } from '@ant-design/icons';
import SubTitle from '@pages/boards/detail/default/sub_title';
import DescriptionEdit from '@pages/boards/detail/default/board_description/default/description_edit';
import { Button } from 'antd';

function BoardDescription() {
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const markdown = `
  ### Hi👋 This is amazing board

  - 🔭 I’m currently working on my task
  - 🌱 I’m currently learning go, typescript
  - 💬 Ask me about ruby
    `;

  return (
    <>
      <div className="board-description-info">
        <SubTitle>
          <FileTextFilled />
          <span>Description</span>
        </SubTitle>

        {!openEdit && (
          <Button shape="round" onClick={() => setOpenEdit(true)}>
            <EditFilled /> Edit
          </Button>
        )}
      </div>

      <div className="board-description">
        {!openEdit && <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>}
        {openEdit && <DescriptionEdit setOpenEdit={setOpenEdit} />}
      </div>
    </>
  );
}

export default BoardDescription;
