import React, { useEffect, useCallback, useRef } from 'react';


type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback( (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  }, [modalRef, onClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    show && (
      <div className="fixed top-0 left-0 flex w-full h-full items-center justify-center z-[1] bg-black/40 bg-opacity-75">
        <div className="p-5 bg-slate-300 rounded-lg" ref={modalRef}>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;