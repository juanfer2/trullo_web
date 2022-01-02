import React from 'react';
import Card from '@components/card';
import 'material-design-icons';
import Modal from '@components/modal';
import BoardForm from '@modules/board/form';
import ImagePexels from '@assets/images/nature-image.jpg'

function Boards() {
  const image = 'https://joeschmoe.io/api/v1/random';

  /*
  const bagedList = [
    {
      label: 'label 1',
      type: 'primary'
    },
    {
      label: 'label 2',
      type: 'secondary'
    }
  ];
  */

  const avatarURls = [{ name: image, url: image }];
  return (
    <div className="boards">
      <div className="header-content">
        <h1>Boards</h1>
        <Modal nameBtn="+ add">
          <BoardForm />
        </Modal>
      </div>

      <div className="list-board">
        <Card
          title="My first Card"
          imageUrl={ImagePexels}
          avatarUrls={avatarURls}
        />

        <Card
          title="My first Card"
          imageUrl={ImagePexels}
          avatarUrls={avatarURls}
        />

        <Card
          title="My first Card"
          imageUrl={ImagePexels}
          avatarUrls={avatarURls}
        />

        <Card
          title="My first Card"
          imageUrl={ImagePexels}
          avatarUrls={avatarURls}
        />
      </div>
    </div>
  );
}

export default Boards;
