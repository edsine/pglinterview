const express = require('express');
const tasksRepo = require('../tasks');
const tasks = require('../tasks.json');
const router = express.Router();
const app = require('../app');

// get newTask route
router.get('/', (req, res) => {
  res.send(app({ tasks }));
})

// submit newTask
router.post('/', async (req, res) => {
  // extract task from request params
  const task = req.body;
  try {
    await tasksRepo.create(task);
  }
  catch (err) {
    return res.send('Could not create task')
  }

  res.redirect('/allTasks')
});

module.exports = router;