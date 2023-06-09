# pglinterview

Supervised by Mr. James.

## Description

Simple CRUD app written with Express, Node.js and JSON.

## How to Start App

From your terminal, cd into the working directory `pglinterview`

// To avoid working in a different cwd, confirm you are in the root folder


Run `npm run start`

// This server uses nodemon, so you can watch out for logs or errors


The server should start. Go to your browser and open `localhost:4000`

// Server is listening for 4000 and opens web interface on port 4000 or 127.0.0.1.4000



Any error that occurs should be displayed on the web page or seen on the terminal.


## How to Debug

>
>
> Routes
>
>> `allTask` Route for allTasks ('/allTask'). Contains logic for updating and deleting tasks.
>>
>>

> `app.js` Contains logic for client-side. Form, buttons and other simple (UI) elements are rendered.
>
> `package.json` Contains the application's packages and manages other libraries and dependencies.
>
> `README.md`**
>
> `repos.js` Contains logic for parsing CRUD action to server-side repository.
>
> `server.js` Contains logic for server-side entry point and *express(app)*.
>
> `tasks.js` Contains logic for extending task repository from repos.js.
>
> `tasks.json` Stores data from CRUD action as Tasks: *user input*.
>

### Gideon Iduma
