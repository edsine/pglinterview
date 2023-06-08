//import/ requiring in app dependencies 
const express = require('express');
const http = require('http');
const app = express();
const port = 4000;

// initialize server with http
const server = http.createServer(app);

// requiring in the application routes
const newTaskRouter = require('./routes/newTasks');
const allTaskRouter = require('./routes/allTasks');

// using the different app routes
app.use(newTaskRouter);
app.use(allTaskRouter);

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
})