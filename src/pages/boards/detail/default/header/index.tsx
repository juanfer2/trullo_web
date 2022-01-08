import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

function Header({ setActive }: { setActive: Function }) {
  return (
    <div className="header">
      <h3>This a title</h3>
      <CloseOutlined onClick={() => setActive(false)} />
    </div>
  );
}

export default Header;
