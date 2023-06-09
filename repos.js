// require in the dependencies
const fs = require('fs');
const crypto = require('crypto');

module.exports = class Repos {
  constructor(filename) {
    // checking for filename
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }

    // filesystem init, try and catch (errors)
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    }
    catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  // creating tasks
  async create(item) {
    item.id = this.randomId();

    const tasks = await this.getAll();
    tasks.push(item);
    await this.writeAll(tasks);

    return item;
  }

  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }

  // getting allTasks
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

  // update or edit task
  async update(id, item) {
    const tasks = await this.getAll();
    const task = tasks.find(task => task.id === id);

    // no element in the client-side for update request
    if (!task) {
      throw new Error(`Task with id ${id} not found!`)
    }

    Object.assign(tasks, item);
  }

  // delete task from allTasks
  async delete(id) {
    const tasks = await this.getAll();

    const filteredTasks = tasks.filter(
      task => task.id !== id);
    await this.writeAll(filteredTasks);

    return tasks;
  }
}