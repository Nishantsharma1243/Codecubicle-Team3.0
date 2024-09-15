import React from "react";

const Modal: React.FC<ModalProps> = ({ id, title, content, onCloseText }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-[#ffffff] text-black dark:bg-[#181818] dark:text-white">
        <div className="text-lg font-bold">{title}</div>
        <div className="py-4">{content}</div>
        <div className="modal-action">
          <form method="dialog"></form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
