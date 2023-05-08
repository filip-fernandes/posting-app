# posting-app
A full-stack reddit-like app (without comments and votes) that I built to familiarize with Node.

![Alt Text](https://i.imgur.com/G5cydhg.png)

## Libraries/Frameworks used
• Node<br>
• Exress<br>
• Mongoose<br>
• React<br>
• Vite<br>

The MERN stack.

## Features
1. A login system with token authentication.
2. A posting system.

## Run locally
1. Install all dependencies from both package.json (server and web-client).
2. Create `MONGO_CONNECTION` MongoDB connection string and `JWT_SECRET` (can be anything you want) environment variables on a .env file in `/server`.
3. `cd` into `server/src` and run `node index.js` and, on another terminal, `cd` into `web-client/src` and run `npm run dev`.
4. Open a browser and acccess it on http://localhost:5173/.
