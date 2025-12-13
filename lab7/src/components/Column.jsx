import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

export default function Column({ 
  title, 
  tasks, 
  statusKey, 
  onAdd, 
  onDelete, 
  onDeleteAll,
  onDeleteColumn,
  onUpdateTask 
}) {
  const [showForm, setShowForm] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!titleInput.trim()) return;
    onAdd(titleInput.trim(), descInput.trim());
    setTitleInput("");
    setDescInput("");
    setShowForm(false);
  }

  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <div className="column-actions">
          <button 
            className="column-menu-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            ⋮
          </button>
          
          {showMenu && (
            <div className="column-dropdown">
              <button onClick={() => {
                onDeleteAll();
                setShowMenu(false);
              }}>
                Delete All Tasks
              </button>
              <button onClick={() => {
                if (window.confirm(`Delete entire "${title}" column?`)) {
                  onDeleteColumn();
                }
                setShowMenu(false);
              }}>
                Delete Column
              </button>
            </div>
          )}
        </div>
      </div>

      {showForm ? (
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            autoFocus
            className="task-input"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={descInput}
            onChange={(e) => setDescInput(e.target.value)}
            className="task-input"
          />
          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Add Card
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="close-btn"
            >
              ✖
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="add-card-btn"
        >
          + Add Card
        </button>
      )}

      <Droppable droppableId={statusKey}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.length === 0 && <p className="empty">No tasks</p>}

            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onDelete={onDelete}
                onUpdate={onUpdateTask}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}