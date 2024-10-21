"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";

interface AppModalProps {
  children: React.ReactNode;
  label: string;
  styles?: string;
}
// eslint-disable-next-line react/display-name
const AppModal = forwardRef((props: AppModalProps, ref) => {
  const [isOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useImperativeHandle(ref, () => {
    return {
      handleCloseModal,
    };
  });

  return (
    <>
      <button className={props.styles} onClick={handleOpenModal}>
        {props.label}
      </button>
      {isOpen && (
        <div className="tw-modal tw-modal-open">
          <div className="tw-modal-box">
            {props.children}
            <div className="tw-modal-action">
              <button className="tw-btn" onClick={handleCloseModal}>
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default AppModal;
