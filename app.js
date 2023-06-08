module.exports = ({ tasks }) => {
  return `
    <main>
      <form action="/" method="POST">
        <h1 class="title">Add new Task</h1>
        <div class="task">
          <label class="label">Task</label>
          <input type="text" placeholder="Task" name="Task" />
        </div>
        <button class="button">Submit</button>
      </form>
    </main>
    `
}