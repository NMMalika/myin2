
import "./App.css";
import { Header } from "./components/Header";
import { Footer} from "./components/Footer";
import { Tasklist } from "./components/Tasklist";

function App() {
   
  return (
    <>
      <Header />
      <Tasklist/>
     
      <Footer />
    </>
  );
}

export default App;
//jsx HTML code and Javascript must be wrapped inside a tag
//CamelNaming for className
// close all tags