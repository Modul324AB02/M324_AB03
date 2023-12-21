import express from 'express';
import http from 'http';
import { Request, Response } from 'express';
import os from 'os';

// Create the express server
const app = express();
const server = http.createServer(app);

// route for / that returns a simple html page with the hostname
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello World!</h1><p>Host: ${os.hostname()}</p>`);
});

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Express Server started on port ${serverPort}`);
});

// New Route-Handler for /log/time
app.get('/log/time', (req: Request, res: Response) => {
  const currentTime = new Date().toISOString();
  console.log(`Log Time: ${currentTime}`);
  res.send(`<h1>Current Time Logged</h1><p>${currentTime}</p>`);
});
