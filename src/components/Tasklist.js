import React from 'react'
import { useState } from "react";

export const Tasklist = (props) => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record React Lectures", completed: false },
    { id: 2, name: "edit React Lectures", completed: true },
    { id: 3, name: "watch React Lectures", completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSub() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleDelete(id) {
    setTasks(tasks.filter(task => id !== task.id));
  }

  return (
    <div> <div className="App">
            <h1>will i one day become a pro{props.title}</h1>
            <div className="box">
              <p>{count}</p>
              <button onClick={handleAdd} className="add">
                ADD
              </button>
              <button onClick={handleSub} className="sub">
                SUB
              </button>
              <button onClick={handleReset} className="reset">
                RESET
              </button>
            </div>
            <div>
              <h1>Task List</h1>
              <button onClick={()=>setShow(!show)}>Toggle</button>
              <ul>
                {show &&
                  tasks.map((task, index) => (
                    <li key={task.id}>
                      <span>
                        {task.id} - {task.name}
                      </span>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="delete"
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </li>
                  ))}
                
              </ul>
            </div>
          </div>
    </div>
  );
}
