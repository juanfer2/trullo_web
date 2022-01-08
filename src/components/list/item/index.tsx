import React from 'react';
import Image from '@components/image';

export interface ItemInterface {
  avatar?: string;
  title: string;
  rightContent?: any;
}

function Item({ avatar, title, rightContent }: ItemInterface) {
  return (
    <div className="item">
      <div className="description">
        {avatar && (
          <div>
            <Image imageUrl={avatar} type="small" name="avatar-team" />
          </div>
        )}

        <h4>{title}</h4>
      </div>

      {rightContent && <div className="actions">{rightContent}</div>}
    </div>
  );
}

Item.defaultProps = {
  avatar: null,
  rightContent: null
};

export default Item;
