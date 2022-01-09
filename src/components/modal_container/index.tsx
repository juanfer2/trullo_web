import React from 'react';
import { Modal as ModalAnd } from 'antd';

function ModalContainer({
  open,
  setOpen,
  children
}: {
  open: boolean;
  setOpen: Function;
  children: React.ReactNode;
}) {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <ModalAnd
        footer={false}
        closable={false}
        visible={open}
        onOk={closeModal}
        onCancel={closeModal}
        width={1000}
      >
        {children}
      </ModalAnd>
    </div>
  );
}

export default ModalContainer;
