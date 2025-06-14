import { useState, useRef, useEffect, useMemo } from "react";
import "./App.css";
import "easyform-ant-tailwind/dist/index.css";

// your exported component
// import "antd/dist/reset.css"; // if you're using Ant Design
// import "testlib/dist/index.css";
// Note Input Component

function KeepNoteInputs({ noteId, onSave }) {
  const [inputCount, setInputCount] = useState(1);
  const inputsRef = useRef({});
  const inputRefs = useRef({});
  const [_, forceRerender] = useState(0); // force state to trigger re-render

  // Load saved note content
  useEffect(() => {
    inputsRef.current = {};
    inputRefs.current = {};
    const saved = JSON.parse(localStorage.getItem(`note-${noteId}`)) || [];
    saved.forEach((val, i) => {
      inputsRef.current[i] = val;
    });
    setInputCount(saved.length > 0 ? saved.length + 1 : 1);
  }, [noteId]);

  // Focus last input
  useEffect(() => {
    const lastIndex = inputCount - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  }, [inputCount]);

  // Save on exit
  useEffect(() => {
    const saveNote = () => {
      const orderedValues = [];
      for (let i = 0; i < inputCount; i++) {
        const val = inputsRef.current[i];
        if (val !== undefined && val.trim() !== "") {
          orderedValues.push(val);
        }
      }
      localStorage.setItem(`note-${noteId}`, JSON.stringify(orderedValues));
      onSave();
    };
    window.addEventListener("beforeunload", saveNote);
    return () => window.removeEventListener("beforeunload", saveNote);
  }, [noteId, inputCount, onSave]);

  const handleChange = (index, value) => {
    if (value.trim() === "") {
      delete inputsRef.current[index];
    } else {
      inputsRef.current[index] = value;
    }
  };

  // Recalculate average
  const { average, total } = useMemo(() => {
    const values = Object.values(inputsRef.current);
    const numbers = values.map((v) => Number(v)).filter((v) => !isNaN(v));
    const total = numbers.length;
    if (total === 0) return { average: null, total };
    const sum = numbers.reduce((a, b) => a + b, 0);
    return { average: (sum / total).toFixed(2), total };
  }, [inputCount, noteId, _]); // `_` is used to force refresh when save is clicked

  // Save button
  const handleManualSave = () => {
    const orderedValues = [];
    for (let i = 0; i < inputCount; i++) {
      const val = inputsRef.current[i];
      if (val !== undefined && val.trim() !== "") {
        orderedValues.push(val);
      }
    }
    localStorage.setItem(`note-${noteId}`, JSON.stringify(orderedValues));
    onSave();
    forceRerender((n) => n + 1); // trigger average recalculation
  };

  // Clear button
  const handleClear = () => {
    localStorage.removeItem(`note-${noteId}`);
    inputsRef.current = {};
    inputRefs.current = {};
    setInputCount(1);
    forceRerender((n) => n + 1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 py-6  bg-white shadow-xl border border-gray-200">
      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-700">
        Note {noteId}
      </h1>
      <div className="flex flex-col">
        {Array.from({ length: inputCount }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            className="w-full py-2 border-b border-gray-300 focus:outline-none text-lg"
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Note ${index + 1}`}
            defaultValue={inputsRef.current[index] || ""}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const value = e.target.value.trim();
                if (value !== "") {
                  inputsRef.current[index] = value;
                  setInputCount((prev) => prev + 1);
                }
              }
            }}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={handleManualSave}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Save & Recalculate
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      {/* Average display */}
      {average && (
        <div className="mt-4 text-green-700 font-medium px-4 text-center">
          Average: {average} | Total: {total}
        </div>
      )}
    </div>
  );
}

// Main App Component
function App() {
  const [notes, setNotes] = useState([1]);
  const [currentNote, setCurrentNote] = useState(1);

  // Create a new note
  const createNewNote = () => {
    const newId = Date.now();
    const newNotes = [...notes, newId];
    setNotes(newNotes);
    setCurrentNote(newId);
    localStorage.setItem("all-note-ids", JSON.stringify(newNotes));
  };

  // Switch to a note
  const loadNote = (noteId) => {
    setCurrentNote(noteId);
  };

  // Save note list
  const handleSave = () => {
    localStorage.setItem("all-note-ids", JSON.stringify(notes));
  };

  // Load note IDs from localStorage
  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("all-note-ids")) || [];
    const valid = savedIds.length > 0 ? savedIds : [1];
    setNotes(valid);
    setCurrentNote(valid[valid.length - 1]);
  }, []);
  const [form] = Form.useForm();
  return (
    <div className="min-h-screen bg-white dark:bg-black py-10">
      <div className="max-w-2xl mx-auto mb-6">
        <button
          onClick={createNewNote}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          ➕ New Note
        </button>
        <div className="mt-4">
          {notes.map((id) => (
            <button
              key={id}
              className={`px-3 py-1 m-1 border rounded ${
                id === currentNote ? "bg-blue-200" : "bg-gray-100"
              }`}
              onClick={() => loadNote(id)}
            >
              Note {id}
            </button>
          ))}
        </div>
      </div>
      <KeepNoteInputs noteId={currentNote} onSave={handleSave} />
      <div className="  border-box"> </div>
    </div>
  );
}

export default App;
