module.exports = ({ tasks }) => {
  const allTasks = tasks.map(
    task => {
      return `
      <div>
        <button id="${task.id}">
          ${task.Task}
        </button>
      </div>
      `
    }
  ).join('\n');

  return `
    <main>
      <form action="/" method="POST">
        <h1 class="title">Add new Task</h1>
        <div class="task">
          <h3>
            <label name="Task"/>
          </h3>
          <input type="text" placeholder="Task" name="Task" />
        </div>
        <button class="button">Submit</button>
      </form>
      <div>
        <h1>Tasks</h1>
        <div>
          ${allTasks}
        </div>
      </div>
    </main>
    `
}