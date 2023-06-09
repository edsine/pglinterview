const express = require('express');

const allTasks = require('../app');
const tasksRepo = require('../tasks');
const tasks = require('../tasks.json');

const router = express.Router();

// get newTask route
router.get('/', (req, res) => {
  res.send(allTasks({ tasks }));
})

// create newTask route
router.post('/', async (req, res) => {
  // extract task from request with try/catch
  const task = req.body;
  try {
    await tasksRepo.create(task);
  }
  catch (err) {
    console.log(err.message);
    return res.send('Could not create task')
  }

  res.redirect('/allTasks')
});

// read allTask route
router.get('/allTasks', (req, res) => {
  // parse tasks with try/catch
  try {
    res.send(allTasks({ tasks }))
  }
  catch (err) {
    console.log(err.message);
    return res.send('Something went wrong')
  }

})


// update allTask route
router.post('/allTasks/:id/update', async (req, res) => {
  // no element in client-side for update request
  await tasksRepo.update(update);

  res.redirect('/allTasks');
});

// delete allTasks route
router.post('/allTasks/:id/delete', async (req, res) => {
  console.log(req.params.id);
  // match tasks to delete with request params
  await tasksRepo.delete(req.params.id);

  res.redirect('/allTasks')
});

module.exports = router;