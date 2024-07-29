import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notification from './Notification';

interface Message {
    _id: string;
    message: string;
    date: string;
}

const Chat: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [editMessageId, setEditMessageId] = useState<string | null>(null);
    const [editMessageText, setEditMessageText] = useState<string>('');
    const [notification, setNotification] = useState<string | null>(null);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('https://cheating-chatapp-backend.onrender.com/');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const sendMessage = async () => {
        if (message.trim() !== '') {
            try {
                const response = await axios.post('https://cheating-chatapp-backend.onrender.com/message', { message });
                const newMessage = response.data;
                setMessages([...messages, newMessage]);

                // Show notification
                setNotification('New message sent!');

                // Remove message after 1 minute
                setTimeout(() => {
                    setMessages((prevMessages) =>
                        prevMessages.filter((msg) => msg._id !== newMessage._id)
                    );
                }, 10000); // 10000 ms = 10 seconds

                setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    const deleteMessage = async (id: string) => {
        try {
            await axios.delete(`https://cheating-chatapp-backend.onrender.com/message/${id}`);
            setMessages(messages.filter((msg) => msg._id !== id));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const editMessage = (id: string, message: string) => {
        setEditMessageId(id);
        setEditMessageText(message);
    };

    const updateMessage = async () => {
        if (editMessageId && editMessageText.trim() !== '') {
            try {
                const response = await axios.put(`https://cheating-chatapp-backend.onrender.com/message/${editMessageId}`, { message: editMessageText });
                setMessages(messages.map((msg) => (msg._id === editMessageId ? response.data : msg)));
                setEditMessageId(null);
                setEditMessageText('');
            } catch (error) {
                console.error('Error updating message:', error);
            }
        }
    };

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            <div className="flex-grow p-4 overflow-auto space-y-4">
                {messages.length === 0 ? (
                    <h1 className="text-center text-4xl font-bold glow-bounce">Bimber</h1>
                ) : (
                    messages.map((msg) => (
                        <div key={msg._id} className="mb-2 p-4 rounded-lg bg-gray-800 text-white shadow-md">
                            {editMessageId === msg._id ? (
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        className="flex-grow p-2 border rounded text-black"
                                        value={editMessageText}
                                        onChange={(e) => setEditMessageText(e.target.value)}
                                    />
                                    <button
                                        onClick={updateMessage}
                                        className="p-2 bg-blue-500 text-white rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold">{msg.message}</div>
                                        <div className="text-sm text-gray-400">{new Date(msg.date).toLocaleString()}</div>
                                    </div>
                                    <div className="flex space-x-2 mt-2">
                                        <button
                                            onClick={() => deleteMessage(msg._id)}
                                            className="p-2 bg-red-500 text-white rounded"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => editMessage(msg._id, msg.message)}
                                            className="p-2 bg-yellow-500 text-black rounded"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
            <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center space-x-4">
                <input
                    type="text"
                    className="flex-grow p-2 border border-gray-600 rounded bg-gray-800 text-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button
                    onClick={sendMessage}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Send
                </button>
            </div>
            {notification && (
                <Notification
                    message={notification}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    );
};

export default Chat;
