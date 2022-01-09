import React, { useState } from 'react';
import Image from '@components/image';
import ButtonInfo from '@components/button_info';
import DnD from '@components/dnd';

import { EllipsisOutlined, LockFilled } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import HideBar from '@pages/boards/detail/default/hide_bar';

function BoardDetail() {
  const [active, setActive] = useState(false);
  const image = 'https://joeschmoe.io/api/v1/random';

  const menuStatus = (
    <Menu className="menu">
      <Menu.Item key="0" disabled>
        <div className="menu-header">
          <h4>Visibility</h4>
          <span>Choose who can see to this board.</span>
        </div>
      </Menu.Item>

      <Menu.Item key="2">
        <LockFilled />
        <span>Private</span> <br />
        <span>Choose who can see to this board.</span>
      </Menu.Item>

      <Menu.Item key="1">
        <LockFilled />
        <span>Public</span> <br />
        <span>Choose who can see to this board.</span>
      </Menu.Item>
    </Menu>
  );

  const avatarURls = [
    { name: image, url: image },
    { name: image, url: image },
    { name: image, url: image },
    { name: image, url: image }
  ];

  return (
    <div>
      <div className="section-info">
        <div className="board-info">
          <Dropdown overlay={menuStatus} trigger={['click']}>
            <ButtonInfo>
              <LockFilled />
              <span>Private</span>
            </ButtonInfo>
          </Dropdown>

          <div className="avatars">
            {avatarURls &&
              avatarURls.map((avatar: any) => (
                <Image key={avatar.name} imageUrl={avatar.url} type="small" name={avatar.name} />
              ))}
          </div>
        </div>

        <div className="board-actions">
          <ButtonInfo onClick={() => setActive(true)}>
            <EllipsisOutlined />
            <span>Show Menu</span>
          </ButtonInfo>

          <HideBar active={active} setActive={setActive} />
        </div>
      </div>

      <div className="columns">
        <DnD />
      </div>
    </div>
  );
}

export default BoardDetail;
