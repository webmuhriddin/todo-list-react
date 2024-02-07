import EmptyTodo from "./EmptyTodo";

function TodoBody({ todos, removeTodo }) {
  return (
    <>
      {todos.length ? (
        todos.map((todo, idx) => (
          <li key={idx}>
            <h4>{todo}</h4>
            <button onClick={() => removeTodo(idx)}>Delete</button>
          </li>
        ))
      ) : (
        <EmptyTodo />
      )}
    </>
  );
}

export default TodoBody;
