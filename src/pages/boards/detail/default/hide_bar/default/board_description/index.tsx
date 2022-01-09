import React, { useState } from 'react';

import { FileTextFilled, EditFilled } from '@ant-design/icons';
import SubTitle from '@components/subtitle';
import { Button } from 'antd';
import DescriptionEdit from './default/description_edit';
import DescriptionMarkdown from './default/description_markdown';

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
        <SubTitle icon={<FileTextFilled />} text="Description" />

        {!openEdit && (
          <Button shape="round" onClick={() => setOpenEdit(true)}>
            <EditFilled /> Edit
          </Button>
        )}
      </div>

      <div className="board-description">
        {!openEdit && <DescriptionMarkdown markdown={markdown} />}
        {openEdit && <DescriptionEdit setOpenEdit={setOpenEdit} />}
      </div>
    </>
  );
}

export default BoardDescription;
