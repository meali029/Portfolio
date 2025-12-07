import React from "react";
import { BellOff } from "lucide-react";

const Notification = ({ message, type }) => {
  const getNotificationStyle = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      case "warning":
        return "bg-yellow-600 text-black";
      case "error":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 min-w-[300px] max-w-md p-4 rounded-md shadow-md ${getNotificationStyle()} transition-all duration-300 z-50`}
    >
      <div className="flex justify-between items-center">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
