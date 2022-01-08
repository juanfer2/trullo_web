import { Button } from 'antd';
import React from 'react';

interface ButtonInfoInterface {
  children: React.ReactNode;
  onClick?: any;
}

function ButtonInfo({ children, onClick }: ButtonInfoInterface) {
  return (
    <Button onClick={onClick} className="button-info">
      {children}
    </Button>
  );
}

ButtonInfo.defaultProps = {
  onClick: () => {}
};

export default ButtonInfo;
