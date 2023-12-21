import Container from "../../Components/Container";

const TaskFrom = () => {
  const taskHandleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const titles = form.titles.value;
    const description= form.description.value;
    const deadlines = form.deadlines.value;
    const priority = form.priority.value;
    console.log(titles,description,deadlines,priority);
  };
  return (
    <div>
      <Container>
        <h2 className="text-3xl text-center mt-5 mb-5">Task From</h2>
        <form onSubmit={taskHandleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Titles</span>
            </label>
            <input type="text" placeholder="Task Titles" name="titles" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Description</span>
            </label>
            <input type="text" placeholder="description" name="description" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Deadlines</span>
            </label>
            <input type="text" placeholder="description" name="deadlines" className="input input-bordered" required />
          </div>
          <select className="select select-bordered w-full mt-4" name="priority">
            <option disabled selected>
              Task priority?
            </option>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>
          <div className="form-control mt-6">
            <input type="submit" value="Task Submit" className="btn btn-success" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default TaskFrom;


