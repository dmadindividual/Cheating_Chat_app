// src/components/Notification.tsx
import React, { useEffect } from 'react';

interface NotificationProps {
    message: string;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Hide the notification after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
            <div className="flex items-center">
                <div className="animate-ping h-2.5 w-2.5 bg-white rounded-full mr-2"></div>
                <div className="text-sm">{message}</div>
            </div>
        </div>
    );
};

export default Notification;
