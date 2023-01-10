import React from "react";
import "./Task.css";

const Task = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    // props.onChangeFilter(event.target.value);
  };

  const enteredDescription = "";

  //   const onCancel=(event)=>{
  //     event.preventDefault()
  //   }

  const AddTaskHandler = (event) => {
    console.log("task added");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    
    console.log("submitted");
    // setEnteredTitle('');
    // setEnteredAmount('');
    // setEnteredDate('');
  };
  return (
    <form onSubmitHandler={submitHandler}>
      <h5>Enter Task Details here :</h5>
      <div className="task-container">
        <section className="task-container__category">
          <label>Select the Category </label>
          <select>
            {/* value={props.selected} onChange={dropdownChangeHandler}> */}
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Fitness">Fitness</option>
          </select>
        </section>
        <div className="new-task__control">
          <label> Description</label>
          <input
            type="text"
            // value={enteredTitle}
            // onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-task__actions">
        <button type="button">
          {/* onClick={props.onCancel}> */}
          Cancel
        </button>
        <button type="submit" onSubmit={AddTaskHandler}>
          Add
        </button>
      </div>
    </form>
  );
};
export default Task;
