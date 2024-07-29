Here's an updated `README.md` file for your project, including details about the real-time messaging system using Socket.IO:

```markdown
# Bimber

Bimber is a real-time messaging application built with TypeScript, Express, MongoDB, and Socket.IO.

## Features

- Real-time message broadcasting using Socket.IO
- CRUD operations for messages
- TypeScript for type safety
- MongoDB for data storage
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/bimber.git
cd bimber
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URL=your-mongo-db-connection-string
```

## Running the Application

To start the development server:

```sh
npm run dev
# or
yarn dev
```

The server will start on port 5000. You can access the application at `http://localhost:5000`.

## API Endpoints

- **GET /**: Fetch all messages
- **POST /message**: Create a new message
- **DELETE /message/:id**: Delete a message by ID
- **PUT /message/:id**: Update a message by ID

## WebSocket Events

- **newMessage**: Broadcasted when a new message is created
- **deleteMessage**: Broadcasted when a message is deleted
- **updateMessage**: Broadcasted when a message is updated

## Project Structure

```plaintext
.
├── node_modules
├── src
│   ├── models
│   │   └── Message.ts
│   ├── index.ts
├── .env
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Message Model

The `Message` model schema:

```typescript
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    message: String,
    date: { type: Date, default: Date.now },
    deviceId: String,
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
```

## Example Request

### POST /message

```sh
curl -X POST http://localhost:5000/message -H "Content-Type: application/json" -d '{"message": "Hello, world!"}'
```

### GET /

```sh
curl http://localhost:5000/
```

## License

This project is licensed under the MIT License.
```

Feel free to adjust the repository URL and any other specific details as needed. This `README.md` provides an overview of the project, installation instructions, API endpoints, and examples for using the API.