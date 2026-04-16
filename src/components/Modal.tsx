"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-red-500 w-2xs h-1/4 p-2">
        <div className="flex justify-between">
          <h1>HeLLO</h1>
          <h1 className="cursor-pointer">x</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
