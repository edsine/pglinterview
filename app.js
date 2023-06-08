module.exports = ({ tasks }) => {

  return `
    <main>
      <form action="/" method="POST">
        <h1 className="title">Add new Task</h1>
        <div className="textarea">
          <label className="label">Task</label>
          <input required class="input" placeholder="Task" name="newTask" />
        </div>
        <button className="button">Submit</button>
      </form>
    </main>
    `
}