import React, { useState } from "react";

function Subtask({ subtasks, onSaveSubtask, onDeleteSubtask }) {
  const [subtaskTitle, setSubtaskTitle] = useState("");
  const [subtaskStatus, setSubtaskStatus] = useState("in-progress");

  const handleSubtaskCreate = () => {
    if (subtaskTitle.trim() === "") {
      return;
    }

    const newSubtask = {
      title: subtaskTitle,
      status: subtaskStatus,
    };

    onSaveSubtask(newSubtask);
    setSubtaskTitle("");
    setSubtaskStatus("in-progress");
  };

  const handleSubtaskDelete = (subtaskId) => {
    onDeleteSubtask(subtaskId);
  };

  return (
    <div>
      <div>
        <h3>Add Subtask</h3>
        <label>
          Title:
          <input
            type="text"
            value={subtaskTitle}
            onChange={(e) => setSubtaskTitle(e.target.value)}
          />
        </label>
        <label>
          Status:
          <select
            value={subtaskStatus}
            onChange={(e) => setSubtaskStatus(e.target.value)}
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
        </label>
        <button onClick={handleSubtaskCreate}>Add Subtask</button>
      </div>
      <div>
        {subtasks && subtasks.length > 0 ? (
          <ul>
            {subtasks.map((subtask) => (
              <li key={subtask.id}>
                {subtask.title}
                <select
                  value={subtask.status}
                  onChange={(e) => setSubtaskStatus(e.target.value)}
                >
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="on-hold">On Hold</option>
                </select>
                <button onClick={() => handleSubtaskDelete(subtask.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No subtasks available.</p>
        )}
      </div>
    </div>
  );
}

export default Subtask;
