import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';

export default function TaskCard({ task, index, onDelete, onUpdate }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [newChecklistItem, setNewChecklistItem] = useState('');
  const [selectedDate, setSelectedDate] = useState(task.dueDate || '');

  const handleAddLabel = () => {
    if (newLabel.trim()) {
      const updatedTask = {
        ...task,
        labels: [...(task.labels || []), { 
          id: Date.now().toString(), 
          text: newLabel.trim(), 
          color: getRandomColor() 
        }]
      };
      onUpdate(updatedTask);
      setNewLabel('');
    }
  };

  const handleRemoveLabel = (labelId) => {
    const updatedTask = {
      ...task,
      labels: (task.labels || []).filter(label => label.id !== labelId)
    };
    onUpdate(updatedTask);
  };

  const handleAddChecklistItem = () => {
    if (newChecklistItem.trim()) {
      const updatedTask = {
        ...task,
        checklist: [...(task.checklist || []), { 
          id: Date.now().toString(), 
          text: newChecklistItem.trim(), 
          completed: false 
        }]
      };
      onUpdate(updatedTask);
      setNewChecklistItem('');
    }
  };

  const toggleChecklistItem = (itemId) => {
    const updatedTask = {
      ...task,
      checklist: (task.checklist || []).map(item => 
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    };
    onUpdate(updatedTask);
  };

  const handleSetDate = () => {
    if (selectedDate) {
      const updatedTask = {
        ...task,
        dueDate: selectedDate
      };
      onUpdate(updatedTask);
      setShowDatePicker(false);
    }
  };

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const completedChecklistItems = task.checklist ? 
    task.checklist.filter(item => item.completed).length : 0;
  const totalChecklistItems = task.checklist ? task.checklist.length : 0;

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task-header">
            <h3>{task.title}</h3>
            <div className="task-actions">
              <button
                className="task-menu-btn"
                onClick={() => setShowMenu(!showMenu)}
              >
                ⋮
              </button>
              
              {showMenu && (
                <div className="task-dropdown">
                  <button onClick={() => {
                    setShowLabels(true);
                    setShowMenu(false);
                  }}>
                    Add Label
                  </button>
                  <button onClick={() => {
                    setShowChecklist(true);
                    setShowMenu(false);
                  }}>
                    Checklist
                  </button>
                  <button onClick={() => {
                    setShowDatePicker(true);
                    setShowMenu(false);
                  }}>
                    Date
                  </button>
                  <button onClick={() => onDelete(task.id)}>
                    Delete Card
                  </button>
                </div>
              )}
            </div>
          </div>

          {task.description && <p className="desc">{task.description}</p>}

          {task.labels && task.labels.length > 0 && (
            <div className="task-labels">
              {task.labels.map(label => (
                <span 
                  key={label.id} 
                  className="label"
                  style={{ backgroundColor: label.color }}
                  onClick={() => handleRemoveLabel(label.id)}
                >
                  {label.text} ×
                </span>
              ))}
            </div>
          )}

          {task.checklist && task.checklist.length > 0 && (
            <div className="task-checklist">
              <div className="checklist-progress">
                <progress 
                  value={completedChecklistItems} 
                  max={totalChecklistItems}
                />
                <span>
                  {completedChecklistItems} / {totalChecklistItems}
                </span>
              </div>
              {task.checklist.map(item => (
                <div key={item.id} className="checklist-item">
                  <input
                    type="checkbox"
                    checked={item.completed || false}
                    onChange={() => toggleChecklistItem(item.id)}
                  />
                  <span className={item.completed ? 'completed' : ''}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {task.dueDate && (
            <div className="due-date">
              📅 Due: {new Date(task.dueDate).toLocaleDateString()}
            </div>
          )}

          {showLabels && (
            <div className="modal-overlay" onClick={() => setShowLabels(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h4>Add Labels</h4>
                <div className="current-labels">
                  {task.labels?.map(label => (
                    <span key={label.id} className="label" style={{ backgroundColor: label.color }}>
                      {label.text} 
                      <button onClick={() => handleRemoveLabel(label.id)}>×</button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="New label"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddLabel()}
                />
                <div className="modal-actions">
                  <button onClick={handleAddLabel}>Add</button>
                  <button onClick={() => setShowLabels(false)}>Close</button>
                </div>
              </div>
            </div>
          )}

          {showChecklist && (
            <div className="modal-overlay" onClick={() => setShowChecklist(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h4>Checklist</h4>
                <input
                  type="text"
                  placeholder="Add checklist item"
                  value={newChecklistItem}
                  onChange={(e) => setNewChecklistItem(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddChecklistItem()}
                />
                <button onClick={handleAddChecklistItem}>Add Item</button>
                <button onClick={() => setShowChecklist(false)}>Close</button>
              </div>
            </div>
          )}

          {showDatePicker && (
            <div className="modal-overlay" onClick={() => setShowDatePicker(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h4>Set Due Date</h4>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <div className="modal-actions">
                  <button onClick={handleSetDate}>Set Date</button>
                  <button onClick={() => {
                    const updatedTask = { ...task, dueDate: null };
                    onUpdate(updatedTask);
                    setSelectedDate('');
                    setShowDatePicker(false);
                  }}>Remove Date</button>
                  <button onClick={() => setShowDatePicker(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}