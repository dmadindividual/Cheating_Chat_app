# Chat Application

## Overview

This Chat Application is a simple, real-time messaging app built with React for the frontend and a Node.js/Express backend. Users can send, edit, and delete messages, which are displayed dynamically. The application also features notifications to alert users when a new message is sent.

## Features

- **Send Messages**: Users can type and send messages that will appear in the chat interface.
- **Edit Messages**: Users can edit their messages after sending them.
- **Delete Messages**: Users can delete their messages from the chat interface.
- **Auto-remove Messages**: Messages automatically disappear from the chat after 10 seconds.
- **Notifications**: Displays a notification when a new message is sent, which disappears after 3 seconds.
- **Real-time Updates**: The chat interface updates in real-time as new messages are sent.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/your-username/chat-application.git
cd chat-application
```

2. **Install dependencies**

For the frontend:

```sh
cd frontend
npm install
```

For the backend:

```sh
cd backend
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `backend` directory and add the following:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. **Run the application**

Start the backend server:

```sh
cd backend
npm start
```

Start the frontend server:

```sh
cd frontend
npm start
```

The application will be accessible at `http://localhost:3000`.

## Usage

- **Sending Messages**: Type your message in the input field at the bottom of the chat interface and click "Send".
- **Editing Messages**: Click the "Edit" button next to the message you want to edit, modify the text, and click "Update".
- **Deleting Messages**: Click the "Delete" button next to the message you want to remove.
- **Notifications**: When a new message is sent, a notification will appear at the top of the screen and disappear after 3 seconds.

## Project Structure

```
chat-application/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── ...
│   ├── public/
│   ├── tailwind.config.js
│   └── ...
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Special thanks to Me

---

Feel free to customize this README to better suit your project's details and structure.