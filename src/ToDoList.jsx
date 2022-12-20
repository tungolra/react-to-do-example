// import React from 'react';
import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

function ToDoList({ todos, toggleCompleted, removeToDo }) {
  return (
    <ul className="ToDoList">
      {todos.map((todo, idx) => (
        <ToDoListItem
          todo={todo}
          idx={idx}
          key={idx}
          toggleCompleted={toggleCompleted}
          removeToDo={removeToDo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
