import React from 'react';

import Header from '@pages/boards/detail/default/header';
import SectionTeam from '@pages/boards/detail/default/section_team';
import Autor from '@pages/boards/detail/default/autor';
import BoardDescription from '@pages/boards/detail/default/board_description';

function HideBar({ active, setActive }: { active: boolean; setActive: Function }) {
  return (
    <div className={active ? 'side-hide-bar' : 'side-hide-bar d-none'}>
      <Header setActive={setActive} />
      <Autor />
      <BoardDescription />
      <SectionTeam />
    </div>
  );
}

export default HideBar;
