import React, { useState, ChangeEvent, FormEvent } from "react";

interface Note {
  id: number; 
  title: string;
  content: string;
  completed: boolean;
}

interface CreateAreaProps {
  onAdd: (newNote: Note) => void;
}

const CreateArea: React.FC<CreateAreaProps> = (props) => {
  const [note, setNote] = useState<Note>({
    id: 0,
    title: "",
    content: "",
    completed: false
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;

    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  const handleCheckboxChange = (): void => {
    setNote(prevNote => {
      const newCompletedState = !prevNote.completed;
      if (newCompletedState) {
        alert("Note completed!"); 
      } else {
        alert("Note marked incomplete!");
      }
      return {
        ...prevNote,
        completed: newCompletedState
      };
    });
  }

  const submitNote = (event: FormEvent<HTMLFormElement>): void => {
    const newNote: Note = {
      ...note,
      id: Date.now()
    };

    props.onAdd(newNote);
    setNote({
      id: 0,
      title: "",
      content: "",
      completed: false
    });
    alert("Note added!");
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
          required
        />
        <div className="check-create">
        <label>Completed</label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={note.completed}
        /></div>
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default CreateArea;
