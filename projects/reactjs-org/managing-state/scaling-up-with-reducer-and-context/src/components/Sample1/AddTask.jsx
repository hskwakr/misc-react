import { useContext, useState } from "react";
import { initialTasks, TasksDispatchContext } from "./TasksContext";

let nextId = initialTasks.length;

export default function AddTask() {
  const dispatch = useContext(TasksDispatchContext);
  const [text, setText] = useState("");

  function handleAddTask() {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          handleAddTask();
        }}
      >
        Add
      </button>
    </>
  );
}
