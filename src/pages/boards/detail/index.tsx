import React from 'react'
import Image from '@components/image'
import ButtonInfo from '@components/button_info';
import { EllipsisOutlined, LockFilled } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

function BoardDetail() {
  const image = 'https://joeschmoe.io/api/v1/random';

  const menu = (
    <Menu className='menu'>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
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
          <ButtonInfo>
            <LockFilled />
            <span>Private</span>
          </ButtonInfo>
          <div className="avatars">
            {
              avatarURls && avatarURls.map((avatar: any) => 
                <Image key={avatar.name} imageUrl={avatar.url} type="small" name={avatar.name} />)
            }
          </div>
        </div>

        <div className="board-actions">
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonInfo>
            <EllipsisOutlined />
            <span>Show Menu</span>
          </ButtonInfo>
        </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default BoardDetail
