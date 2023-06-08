// require in the dependencies
const fs = require('fs');

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
    const tasks = await this.getAll();
    tasks.push(item);

    await this.writeAll(tasks);
    return item;
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

  // delete task from allTasks
  async delete(id) {
    const tasks = await this.getAll();

    const filteredTasks = tasks.filter(
      task => task.id !== id);
    await this.writeAll(filteredTasks);
  }

  // update or edit task
  async update(id, item) {
    const tasks = await this.getAll();
    const task = tasks.find(task => task.id === id);

    if (!task) {
      throw new Error(`Task with id ${id} not found!`)
    }

    Object.assign(tasks, item);
    await this.writeAll(tasks);
  }
}