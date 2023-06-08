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

  // collect task from body
  const { task } = req.body;

  // try to submit
  try {
    await tasksRepo.create({ task });
  }

  // catch error
  catch (err) {
    return res.send('Could not create item')
  }

  res.redirect('/allTasks');
});

module.exports = router;