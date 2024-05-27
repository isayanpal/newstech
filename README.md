# NewsTech

NewsTech is a web application designed to fetch and display the latest technology news articles from various sources. The application is built using modern web technologies, providing a clean and user-friendly interface for staying up-to-date with the latest in tech.

## Demo

Live link - https://newstech-v1.vercel.app/

## Tech Stack

### Frontend

- React
- Axios (HTTP Requests)
- React Router (Routing)
- Tailwind CSS (Styling)

### Backend

- Node.js
- Express.js
- Axios (HTTP Requests)

## Screenshots
![image](https://github.com/isayanpal/newstech/assets/102523492/ee25c49b-6c36-45f4-b6d1-1e9258f4bfa0)
![image](https://github.com/isayanpal/newstech/assets/102523492/3bd569ca-4db9-492b-bcb3-3714be6b62be)


## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Clone the Repository

```bash
git clone https://github.com/isayanpal/newstech.git
cd newstech
```

### Server Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install server dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your environment variables:

   ```plaintext
   NEWS_API_KEY= your api key
   VITE_URL=http://localhost:5173
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Client Setup

1. Open a new terminal window and navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install client dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `client` directory and add your environment variables:

   ```plaintext
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. Start the client:
   ```bash
   npm run dev
   ```

### Running the Application

The client will be running on `http://localhost:5173` and the server on `http://localhost:5000`.

## Contributing

If you want to contribute to NewsTech, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Open a pull request.

## Acknowledgements
- <a href="https://newsapi.org/"><b>News API</b></a> for providing the technology news data.

## Happy Coding ❤️
