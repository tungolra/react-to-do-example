import { useState } from "react";

function NewToDoForm({ setTodo }) {
  const [newToDo, setNewToDo] = useState({ text: "", completed: false });

  function handleAddToDo(e) {
    e.preventDefault();
    setTodo((todos) => {
      return [...todos, newToDo];
    });
    setNewToDo({ text: "", completed: false });
  }
  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddToDo}>
        <input
          value={newToDo.text}
          type="text"
          placeholder="New To-Do"
          required
          pattern=".{4,}"
          onChange={(e) =>
            setNewToDo({ text: e.target.value, completed: false })
          }
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </>
  );
}
export default NewToDoForm;
