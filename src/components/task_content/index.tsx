import React from 'react';
import SubTitle from '@components/subtitle';
import { FileImageFilled, FileTextFilled, ScheduleFilled } from '@ant-design/icons';
import Markdown from '@components/markdown';
import ButtonInfo from '@components/button_info';
import CardAttachement from '@components/card/card_attachement';
import ImagePexels from '@assets/images/nature-image.jpg';
import Image from '@components/image';


function TaskContent() {
  const image = 'https://joeschmoe.io/api/v1/random';
  const markdown = `
  ### Hi👋 This is amazing task

  - 🔭 I’m currently working on my task
  - 🌱 I’m currently learning go, typescript
  - 💬 Ask me about ruby
    `;
  return (
    <div className="task-description">
      <div className="content">
        <div className="header">
          <h2 className="task-name">Title</h2>

          <span className="description-list">in list:&ensp;</span>
          <span className="list-name">description</span>
        </div>

        <div className="description">
          <SubTitle icon={<FileTextFilled />} text="Description" />
          <Markdown markdown={markdown} />
        </div>

        <div className="attachments">
          <SubTitle icon={<FileTextFilled />} text="Attachments" />
          <CardAttachement type="image" imageUrl={ImagePexels} />
          <CardAttachement type="default" />
          <CardAttachement type="default" />
        </div>
      </div>

      <div className="right-bar">
        <div className="actions">
          <div className="">
            <SubTitle icon={<FileTextFilled />} text="Actions" />
          </div>
          <div className="actions-content">
            <ButtonInfo>
              <FileImageFilled />
              <span>cover</span>
            </ButtonInfo>
            <ButtonInfo>
              <ScheduleFilled />
              <span>labels</span>
            </ButtonInfo>
          </div>
        </div>
        <div className="members">
          <div className="">
            <SubTitle icon={<FileTextFilled />} text="Members" />
          </div>

          <div className="member-list">
            <div className="member-item">
              <Image imageUrl={image} type="small" name='member' />
              <div className="member-name">
                <span>Jhoen daen</span>
              </div>
            </div>

            <div className="member-item">
              <Image imageUrl={image} type="small" name='member' />
              <div className="member-name">
                <span>Jhoen daen</span>
              </div>
            </div>

            <div className="member-item">
              <Image imageUrl={image} type="small" name='member' />
              <div className="member-name">
                <span>Jhoen daen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskContent;
