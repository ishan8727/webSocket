WebSocket Server and Client
This project demonstrates how to set up a WebSocket server using Node.js (with Express) and connect it to a basic WebSocket client (HTML + JavaScript). It allows for real-time messaging between the client and server.

Features:
Real-time communication using WebSockets.
Express.js server serving static files (HTML, JS, CSS) as the client interface.
Simple WebSocket client to send and receive messages.

Prerequisites:
Before getting started, make sure you have the following installed on your machine:

Node.js (https://nodejs.org/) - Required to run the server.
npm (comes with Node.js) - For managing dependencies.

Installation

1. Clone the Repository
First, clone the repository to your local machine using Git:

bash
Copy code
git clone https://github.com/ishan8727/webSocket.git
2. Install Dependencies
Navigate to the project folder and install the required dependencies:

bash :
cd websocket-server-client
npm install
# This will install the necessary dependencies, such as express and ws.

Running the Project
1. Start the Server 
To start the server and WebSocket connection, run the following command:

bash:
nodemon index.js
This will start the server at http://localhost:8090.

2. Access the WebSocket Client
Open the index.html file in any modern browser. You should see a simple interface where you can send and receive messages with the WebSocket server.

The client connects to the WebSocket server running at ws://localhost:8090.

How It Works
The Express server serves static files (HTML, CSS, JavaScript) for the client.
The WebSocket server (created using ws library) listens for incoming WebSocket connections on the same server.
Once the client (browser) connects, the WebSocket connection is established, and both client and server can send and receive messages in real time.
File Structure
bash
Copy code
/websocket-server-client
├── /client
│   └── index.html         # The WebSocket client (frontend)
├── /node_modules          # Installed npm packages
├── server.js              # WebSocket server (backend)
├── .env                   # Environment variables
├── package.json           # npm dependencies and scripts
└── README.md              # Project documentation
Environment Variables
You can create a .env file in the root of the project directory to specify any environment variables you might need. The default server port can be set using:

makefile
Copy code
PORT=8090
Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are always welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Troubleshooting
"WebSocket connection failed" error: Make sure the server is running on the correct port (8090 by default).
Browser not connecting: Ensure that you’re using the correct URL (ws://localhost:8090) and that the server is up and running.
With this README, beginners should be able to clone, install dependencies, run the server, and use the WebSocket client easily!
