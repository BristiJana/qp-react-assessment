import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { List } from "react-virtualized";

interface Note {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const toggleNoteComplete = (id: number, completed: boolean) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, completed: completed } : note
      )
    );
  };
  const rowRenderer = ({ index, key, style }: any) => {
    const noteItem = notes[index];
    return (
      <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onToggleComplete={toggleNoteComplete}
          completed={noteItem.completed}
        />
    );
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <List
        width={window.innerWidth}
        height={window.innerHeight - 100}
        rowCount={notes.length}
        rowHeight={150}
        rowRenderer={rowRenderer}
      />
      <Footer />
    </div>
  );
};

export default App;
