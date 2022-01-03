import React, {useState} from 'react'
import Image from '@components/image'
import ButtonInfo from '@components/button_info';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { 
  CloseOutlined, 
  EllipsisOutlined, 
  FileTextFilled, 
  LockFilled, 
  UserOutlined 
} from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

function BoardDetail() {
  const [active, setActive] = useState(false)
  const image = 'https://joeschmoe.io/api/v1/random';

  const markdown = `A paragraph with *emphasis* and **strong importance**. > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
* Lists
    * [ ] todo
    * [x] done

    A table:

    | a | b |
    | - | - |
  `

  const menuStatus = (
    <Menu className='menu'>
      <Menu.Item key="0" disabled>
        <div className='menu-header'>
          <h4>Visibility</h4>
          <span>Choose who can see to this board.</span>
        </div>
      </Menu.Item>

      <Menu.Item key="2">
        <LockFilled /> 
        <span>Private</span> <br/>
        <span>Choose who can see to this board.</span>
      </Menu.Item>

      <Menu.Item key="1">
        <LockFilled /> 
        <span>Public</span> <br/>
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
            {
              avatarURls && avatarURls.map((avatar: any) => 
                <Image key={avatar.name} imageUrl={avatar.url} type="small" name={avatar.name} />)
            }
          </div>
        </div>

        <div className="board-actions">
          <ButtonInfo onClick={() => setActive(true)}>
            <EllipsisOutlined />
            <span>Show Menu</span>
          </ButtonInfo>
          <div className={active ? 'side-hide-bar' : 'side-hide-bar d-none'}>
            <div className="header">
              <h3>This a title</h3>
              <CloseOutlined onClick={() => setActive(false)} />
            </div>

            <div className="create-span">
              <UserOutlined />
              <span>Made by</span>
            </div>

            <div className="card-create-by">
              <div className="image-container">
                <Image key={image} imageUrl={image} type="small" name='create-by' />
              </div>

              <div className="user-info">
                <h4>Daniel Jensen</h4>
                <span>on 4 July, 2020</span>
              </div>
            </div>

            <div className="create-span">
              <FileTextFilled />
              <span>Description</span>
            </div>

            <div className="description">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardDetail
