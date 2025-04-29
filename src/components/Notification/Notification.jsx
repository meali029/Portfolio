import React, { useState, useEffect } from 'react';
import { BellOff } from 'lucide-react';

const Notification = ({ message, type, autoHide, onClose }) => {
//   useEffect(() => {
//     if (autoHide) {
//       const timer = setTimeout(() => onClose(),100000); // Hide after 5 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [autoHide, onClose]);

  const getNotificationStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      case 'warning':
        return 'bg-yellow-600 text-black';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-md ${getNotificationStyle()} transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        {/* <button onClick={onClose} className="ml-4 text-lg font-bold"><BellOff/></button> */}
      </div>
    </div>
  );
};

export default Notification;
