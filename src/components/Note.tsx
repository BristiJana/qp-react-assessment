import React, { useState } from "react";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number, completed: boolean) => void;
  completed: boolean;
}

const Note: React.FC<NoteProps> = (props) => {
  const { id, title, content, onDelete, completed, onToggleComplete } = props;

  const handleClick = (): void => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      props.onDelete(props.id);
      alert("Note deleted!");
    }
  }

  const handleCheckboxChange = (): void => {
    const newCompletedState = !completed;
    onToggleComplete(id, newCompletedState);
    if (newCompletedState) {
      alert("Note completed!");
    } else {
      alert("Note marked incomplete!");
    }
  }

  return (
    <div className={`note ${completed ? 'completed' : ''}`}>
      <h1>{title}</h1>
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <button onClick={handleClick}>🗑️</button>
    </div>
  );
}

export default Note;
