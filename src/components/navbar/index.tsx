import React from 'react';
import Logo from '@assets/images/Logo.svg';
import { Input, Button } from 'antd';
import AvatarMenu from '@modules/perfil/avatar_menu';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="info">
        <div className="logo">
          <img src={Logo} alt="trullo-logo" />
        </div>

        <div className="step">
          <h3>DevChallengesBoard</h3>
        </div>
      </div>

      <div className="actions-nav">
        <div className="search">
          <Input placeholder="search..." />
          <Button type="primary">Search</Button>
        </div>

        <AvatarMenu imageUrl="https://joeschmoe.io/api/v1/random"/>
      </div>
    </nav>
  );
}

export default Navbar;
