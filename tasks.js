// import and initialize task Repository
const Repository = require('./repos');

class TasksRepo extends Repository { }

// export TasksRepo to JSON file
module.exports = new TasksRepo('tasks.json');