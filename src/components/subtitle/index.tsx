import React from 'react';

export interface SubtitleInterface {
  icon?: React.ReactNode;
  cursor?: boolean;
  text: string;
}

function SubTitle({ icon, cursor, text }: SubtitleInterface) {
  return (
    <div className={`sub_title ${cursor ? 'sub_title--active' : ''}`}>
      {icon && icon}
      <span>{text}</span>
    </div>
  );
}

SubTitle.defaultProps = {
  icon: null,
  cursor: false
};

export default SubTitle;
