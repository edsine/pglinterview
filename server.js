//import/ requiring in app dependencies 
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const app = express();
const port = 4000;

// initialize server with http
const server = http.createServer(app);

// requiring in the application routes
const allTaskRouter = require('./routes/allTasks');

// using the different app routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allTaskRouter);

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
})