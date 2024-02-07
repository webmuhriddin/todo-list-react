import React, { useEffect, useState } from "react";

function TodoHeader({ addTodo, error }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={error ? "error" : ""}
        />
        <p className={error ? "block" : ""}>please fill in all inputs!!!</p>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default TodoHeader;
