import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
