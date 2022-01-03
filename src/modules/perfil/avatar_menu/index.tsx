import React from 'react'
import Image from '@components/image';
import { Menu, Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

interface AvatarMenuInterface {
  imageUrl: string;
}

function AvatarMenu({imageUrl}:AvatarMenuInterface) {
  const menu = (
    <Menu className='menu'>
      <Menu.Item key="0">
        <span>My Profile</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <LogoutOutlined />
        <span>
          Log out
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>        
      <div className="perfil-settings">
        <Image imageUrl={imageUrl} type="small" name="avatar-header" />
      </div>
    </Dropdown>
  )
}

export default AvatarMenu
