import "./ToDoListItem.css";

function ToDoListItem({ todo, idx, toggleCompleted, removeToDo }) {
  return (
    <>
      {!todo.completed ? (
        <li
          className="ToDoListItem"
          style={{ backgroundColor: idx % 2 ? "lavender" : "plum" }}>
          <div className="idx">{idx + 1}</div>
          <span>{todo.text}</span>
          <div>
            <button className="btn" onClick={() => toggleCompleted(idx, true)}>
              <span role="img" aria-label="Y">
                ✅
              </span>
            </button>
            <button className="btn" onClick={() => removeToDo(idx)}>
              🗑
            </button>
          </div>
        </li>
      ) : (
        <li
          className="ToDoListItem"
          style={{
            backgroundColor: idx % 2 ? "lavender" : "plum"
          }}>
          <div className="idx">{idx + 1}</div>
          <span
            style={{
              textDecoration: "line-through"
            }}>
            {todo.text}
          </span>
          <div>
            <button className="btn" onClick={() => toggleCompleted(idx, false)}>
              <span role="img" aria-label="X">
                &#10060;
              </span>
            </button>
            <button className="btn" onClick={() => removeToDo(idx)}>
              🗑
            </button>
          </div>
        </li>
      )}
    </>
  );
}
export default ToDoListItem;
