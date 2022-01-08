import React from 'react';

function SubTitle({ children, cursor }: { children: React.ReactNode; cursor?: boolean }) {
  return <div className={`sub_title ${cursor ? 'sub_title--active' : ''}`}>{children}</div>;
}

SubTitle.defaultProps = {
  cursor: false
};

export default SubTitle;
