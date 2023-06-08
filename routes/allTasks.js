const express = require('express');
const tasks = require('../tasks.json');

const router = express.Router();

// get allTask route
router.get('/allTasks', (req, res) => {
  try {
    res.send(tasks)
  }
  catch (err) {
    console.log(err.message);
    return res.send('No Tasks found')
  }
})

// update allTask route
router.post(
  '/allTasks/:id/update',
  async (req, res) => {
    if (req.file) {
      changes.body = req.file
    }
    res.redirect('/allTasks');
  });

// delete tasks route
router.post('/allTasks/:id/delete',
  async (req, res) => {
    await tasks.delete(req.params.id);
    res.redirect('/allTasks')
  });

module.exports = router;