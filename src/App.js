import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";

function App() {
  const [error, setError] = useState(false);
  let [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  // add to data todo list

  const addTodo = (newTodo) => {
    if (!newTodo) {
      setError(true);
      return;
    }
    todos.push(newTodo);
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
    setError(false);
  };

  // remove data from todo list

  const removeTodo = (id) => {
    todos = todos.filter((_, idx) => idx != id);
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="container">
      <TodoHeader addTodo={addTodo} error={error} />
      <ul className="todo-list">
        <TodoBody todos={todos} removeTodo={removeTodo} />
      </ul>
    </div>
  );
}

export default App;
