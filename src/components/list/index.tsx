import React from 'react';
import Item, { ItemInterface } from '@components/list/item';

export interface ListInterface {
  list: ItemInterface[];
}

function List({ list }: ListInterface) {
  return (
    <div className="list">
      {list &&
        list.map((item: ItemInterface) => (
          <Item
            key={item.avatar}
            avatar={item.avatar}
            title={item.title}
            rightContent={item.rightContent}
          />
        ))}
    </div>
  );
}

export default List;
