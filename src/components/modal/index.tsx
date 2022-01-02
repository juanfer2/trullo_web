import React, { useState } from 'react';
import { Modal as ModalAnd, Button } from 'antd';

function Modal({ nameBtn, children }: { nameBtn: string; children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button type="primary" onClick={openModal}>
        {nameBtn}
      </Button>

      <ModalAnd
        footer={false}
        closable={false}
        visible={open}
        onOk={closeModal}
        onCancel={closeModal}
      >
        {children}
      </ModalAnd>
    </div>
  );
}

export default Modal;
