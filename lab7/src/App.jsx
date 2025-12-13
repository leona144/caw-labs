import React, { useState, useEffect } from "react";
import Column from "./components/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("kanban.tasks");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("kanban.columns");
    return saved ? JSON.parse(saved) : [
      { id: "todo", title: "To Do" },
      { id: "inprogress", title: "In Progress" },
      { id: "done", title: "Done" }
    ];
  });

  useEffect(() => {
    localStorage.setItem("kanban.tasks", JSON.stringify(tasks));
    localStorage.setItem("kanban.columns", JSON.stringify(columns));
  }, [tasks, columns]);

  function addTask(title, description, status) {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status,
      labels: [],
      checklist: [],
      dueDate: null,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function addColumn(title) {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: title.trim(),
    };
    setColumns((prev) => [...prev, newColumn]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function deleteAllTasks(status) {
    setTasks((prev) => prev.filter((task) => task.status !== status));
  }

  function deleteColumn(columnId) {
    setTasks((prev) => prev.filter((task) => task.status !== columnId));
    setColumns((prev) => prev.filter((col) => col.id !== columnId));
  }
  
  function updateTask(updatedTask) {
    setTasks((prev) => 
      prev.map((task) => 
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setTasks((prev) => {
      const updated = [...prev];
      const dragged = updated.find((t) => t.id === draggableId);
      dragged.status = destination.droppableId;
      return updated;
    });
  }

  return (
    <div className="app">
      <header>
        <h1>Kanban Board</h1>
        <div className="header-controls">
          <button 
            className="add-column-btn"
            onClick={() => {
              const title = prompt("Enter new column title:");
              if (title) addColumn(title);
            }}
          >
            + Add New Column
          </button>
          <button 
            className="delete-all-btn"
            onClick={() => {
              if (window.confirm("Delete ALL tasks from ALL columns?")) {
                setTasks([]);
              }
            }}
          >
            Delete All Tasks
          </button>
        </div>
      </header>

      <main>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="board">
            {columns.map((column) => (
              <Column
                key={column.id}
                title={column.title}
                statusKey={column.id}
                tasks={tasks.filter((t) => t.status === column.id)}
                onAdd={(title, desc) => addTask(title, desc, column.id)}
                onDelete={deleteTask}
                onDeleteAll={() => deleteAllTasks(column.id)}
                onDeleteColumn={() => deleteColumn(column.id)}
                onUpdateTask={updateTask}
              />
            ))}
            
            <div className="column add-column-placeholder">
              <button
                className="add-column-placeholder-btn"
                onClick={() => {
                  const title = prompt("Enter new column title:");
                  if (title) addColumn(title);
                }}
              >
                + Add Column
              </button>
            </div>
          </div>
        </DragDropContext>
      </main>
    </div>
  );
}