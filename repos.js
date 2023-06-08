// require in the dependencies
const fs = require('fs');
const crypto = require('crypto');

module.exports = class Repos {
  constructor(filename) {

    // checking for filename
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }

    // initialize filesystem
    this.filename = filename;

    // try to write file to system
    try {
      fs.accessSync(this.filename);
    }

    // catch any error
    catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  // creating tasks
  async create(task) {
    task.id = this.randomId();

    const tasks = await this.getAll();

    tasks.push(task);
    await this.writeAll(tasks);

    return tasks;
  }

  // getting all tasks
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8'
      })
    );
  }

  // writing to JSON
  async writeAll(tasks) {
    await fs.promises.writeFile(
      this.filename, JSON.stringify(tasks, null, 2));
  }

  // assign id to task
  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }

  // get tasks from all tasks
  async getOne(id) {
    const tasks = await this.getAll();
    return tasks.find(task => task.id === id);
  }


  // delete tasks from all tasks
  async delete(id) {
    const tasks = await this.getAll();
    const filteredTasks = tasks.filter(
      task => task.id !== id);
    await this.writeAll(filteredTasks);
  }

  // update or edit tasks
  async update(id) {
    const tasks = await this.getAll();
    const task = tasks.find(task => task.id === id);

    if (!task) {
      throw new Error(`Task with id ${id} not found!`)
    }

    Object.assign(task, tasks);
    await this.writeAll(tasks);
  }
}
