import React from 'react';

function Modal({ showModal, handleClose, message }) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Xato</h2>
        <p>{message}</p>
        <button 
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleClose}
        >
          Yopish
        </button>
      </div>
    </div>
  );
}

export default Modal;
