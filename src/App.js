import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import './App.css';
import { Footer} from "./components/Footer";

function App() {
   const[count,setCount ]= useState(0);

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
      <div className="App">will i one day become a pro</div>
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        <button onClick={handleSub } className="sub">SUB</button>
        <button onClick={handleReset} className="reset">RESET</button>
      </div>
      <Footer/>
    </>
  );
}

export default App;
//jsx HTML code and Javascript must be wrapped inside a tag
//CamelNaming for className
// close all tags