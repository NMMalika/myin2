import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import './App.css';
import { Footer} from "./components/Footer";

function App() {
   const[count,setCount ]= useState(0);
   const [tasks, setTasks] = useState([
     { id: 1, name: "Record React Lectures", completed: false },
     { id: 2, name: "edit React Lectures", completed: true },
     { id: 3, name: "watch React Lectures", completed: false },
   ]);

  function handleAdd() {
    setCount(count + 1);
  }
   function handleSub() {
     setCount(count -1);
   }
    function handleReset() {
      setCount(0);
    }

  return (
    <>
      <Header />
      <div className="App">
        <h1>will i one day become a pro</h1>
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
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <span>
                  {task.id} - {task.name}
                </span>
                <button className="delete"> Delete </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
//jsx HTML code and Javascript must be wrapped inside a tag
//CamelNaming for className
// close all tags