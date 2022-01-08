import React from 'react';
import Image from '@components/image';
import { UserOutlined } from '@ant-design/icons';
import SubTitle from '@pages/boards/detail/default/sub_title';

function Autor() {
  const image = 'https://joeschmoe.io/api/v1/random';

  return (
    <>
      <SubTitle>
        <UserOutlined />
        <span>Made by</span>
      </SubTitle>
      <div className="card-create-by">
        <div className="image-container">
          <Image key={image} imageUrl={image} type="small" name="create-by" />
        </div>

        <div className="user-info">
          <h4>Daniel Jensen</h4>
          <span>on 4 July, 2020</span>
        </div>
      </div>
    </>
  );
}

export default Autor;
