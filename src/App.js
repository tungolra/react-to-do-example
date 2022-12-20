import { useState } from "react";
import "./styles.css";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";

export default function App() {
  // "database"
  const initialTodos = [
    { text: "Learn Hooks", completed: true },
    { text: "Learn Props/Prop Drilling", completed: true },
    { text: "Learn Deconstructing Assignments", completed: true },
    { text: "Learn how to create forms", completed: true },
    { text: "Complete Student To-Do Lab", completed: true },
    { text: "Create MERN Application", completed: false }
  ];
  // states
  const [todos, setTodo] = useState(initialTodos);
  const [showTodos, setShowTodos] = useState(true);

  //functions
  function toggleCompleted(idx, bool) {
    const toggleComplete = todos.map((t, i) =>
      i === idx ? { text: t.text, completed: bool } : t
    );
    setTodo(toggleComplete);
  }
  function removeToDo(idx) {
    const newList = todos.filter((todo, i) => i !== idx);
    setTodo(newList);
  }

  return (
    <div className="App">
      <h1>React To-Dos</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>

      {showTodos && (
        <ToDoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeToDo={removeToDo}
        />
      )}
      <hr />
      <NewToDoForm setTodo={setTodo} />
    </div>
  );
}
