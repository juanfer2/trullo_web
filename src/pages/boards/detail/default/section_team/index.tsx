import React from 'react';
import { ProfileFilled } from '@ant-design/icons';
import List from '@components/list';
import { ItemInterface } from '@components/list/item';
import { Button } from 'antd';
import SubTitle from '@pages/boards/detail/default/sub_title';

function SectionTeam() {
  const image = 'https://joeschmoe.io/api/v1/random';

  const listItems: ItemInterface[] = [
    {
      avatar: image,
      title: 'avatar1',
      rightContent: <span>Admin</span>
    },
    {
      avatar: image,
      title: 'avatar2',
      rightContent: <Button danger>Remove</Button>
    },
    {
      avatar: image,
      title: 'avatar3',
      rightContent: <Button danger>Remove</Button>
    }
  ];

  return (
    <>
      <SubTitle>
        <ProfileFilled />
        <span>Team</span>
      </SubTitle>

      <div className="team-list">
        <List list={listItems} />
      </div>
    </>
  );
}

export default SectionTeam;
