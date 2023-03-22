import "./App.css";
import Addtask from "./components/Addtask/Addtask";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return(
  <div className="App">
    <Addtask />
     <TodoList />
  </div>
  )
}

export default App;
