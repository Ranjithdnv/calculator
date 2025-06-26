import { useState, useRef, useEffect, useMemo } from "react";
import "./App.css";
import "easzy-form/dist/index.css";

const formFields3 = [
  {
    label: "Name",
    name: "name",
    borderRadius: "10px",
    type: "text",

    rules: [
      { required: false, message: "Name is required" },
      { min: 6, message: "Name must be at least 6 characters" },
    ],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    label: "Email",
    borderRadius: "0px",
    name: "email",
    type: "email",
    rules: [
      { required: false, message: "Email is required" },
      //  { type: "email", message: "Enter a valid email" },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
        message: "Please enter a valid email format",
      },
    ],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    label: "Password",
    borderRadius: "0px",
    name: "password",
    type: "password",
    rules: [
      { required: false, message: "Password is required" },
      { min: 6, message: "Password must be at least 6 characters" },
    ],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    name: "country",
    label: "Country",
    borderRadius: "0px",
    type: "autocomplete",
    colSpan: { xs: 24, sm: 12, lg: 12 },
    options: [
      { label: "India", value: "IN" },
      { label: "USA", value: "US" },
      { label: "Germany", value: "DE" },
      { label: "Canada", value: "CA" },
    ],
    rules: [{ required: false, message: "Please select your country" }],
  },
  {
    type: "phone",
    label: "Phone Number",
    borderRadius: "10px",
    name: "phoneNumber",
    rules: [
      { required: false, message: "Phone number is required" },
      {
        pattern: /^[0-9]{10}$/,
        message: "Enter a valid 10-digit phone number",
      },
    ],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    label: "Age",
    name: "age",
    type: "number",
    borderRadius: "0px",
    rules: [{ required: false, message: "Age is required" }],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    label: "City",
    name: "city",
    borderRadius: "0px",
    type: "select",
    options: ["New York", "Los Angeles", "Chicago", "Houston"],
    rules: [{ required: false, message: "Please select a city" }],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    borderRadius: "10px",
    rules: [{ required: false, message: "Date of Birth is required" }],
    colSpan: { xs: 24, sm: 6, lg: 6 },
  },
  {
    label: "Start Date",
    name: "startDate",
    type: "date",
    rules: [{ required: false, message: "Start Date is required" }],
    colSpan: { xs: 24, sm: 6, lg: 6 },
  },
  {
    label: "Meeting Time",
    borderRadius: "0px",
    name: "meetingTime",
    type: "time",
    rules: [{ required: false, message: "Please select a time" }],
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    rules: [{ required: false, message: "Please select your gender" }],
    colSpan: { xs: 24, sm: 12, lg: 6 },
  },
  {
    label: "Subscribe to Newsletter",
    name: "subscribe",
    type: "checkbox",
    // rules: [
    //   {
    //     validator: (_, value) =>
    //       value
    //         ? Promise.resolve()
    //         : Promise.reject(new Error("Please subscribe to continue")),
    //   },
    // ],
    colSpan: { xs: 24, sm: 12, lg: 6 },
  },
  {
    label: "Bio",
    name: "bio",
    type: "textarea",
    rules: [{ required: false, message: "Please enter your bio" }],
    colSpan: { xs: 24, sm: 24, lg: 24 },
    row: 4,
  },

  {
    label: "Receive Updates",
    name: "receiveUpdates",
    type: "switch",
    colSpan: { xs: 24, sm: 12, lg: 12 },
  },
  {
    type: "upload",
    name: "resume",
    label: "Resume",
    customcolour: "pink",

    // rules: [{ required: false, message: "Please upload your resume" }],
    accept: ".pdf,.doc,.docx ,.png,.jpg,.mkv",
    maxSize: 50000, // MB
    minSize: 0.1, // MB

    colSpan: { xs: 24, sm: 12, lg: 10 },
  },
  {
    name: "consent",
    label: "Consent to Proceed",
    type: "checkbox", // checkbox to indicate consent
    required: false, // this field is required
    colSpan: { xs: 24, sm: 12, lg: 6 },
    sm: 24, // full width on small screens
  },
];
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
import { createForm, resetFormFields } from "easzy-formjs";
// Main App Component
// ✅ Don't forget useRef
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import C1 from "./compo/c1";
import C2 from "./compo/c2";
import C3 from "./compo/c3";
import C4 from "./compo/c4";

function App() {
  const ref = useRef(null);

  const [notes, setNotes] = useState([1]);
  const [currentNote, setCurrentNote] = useState(1);

  function handleSubmit(data, form, formFields) {
    console.log(data);
    // const formData = new FormData(form); // 📦 Collects all input values, including files

    // // ✅ Optional: Print all values for debugging
    // console.log("FormData values:");
    // for (let [key, value] of formData.entries()) {
    //   if (value instanceof File) {
    //     console.log(
    //       `${key}: File ->`,
    //       value.name,
    //       value.type,
    //       value.size + " bytes"
    //     );
    //   } else {
    //     console.log(`${key}:`, value);
    //   }
    // }

    // // ✅ Store PDF file (example)
    // const pdfFile = formData.get("resume");
    // if (pdfFile && pdfFile.type === "application/pdf") {
    //   // You can now send this file to backend or preview it
    //   console.log("📄 PDF File selected:", pdfFile.name);
    // } else {
    //   console.warn("❌ No PDF file selected or wrong type.");
    // }

    alert("✅ Form submitted successfully!");

    // ✅ Reset the form fields after submission
    resetFormFields(form, formFields);
  }
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountry2, setSelectedCountry2] = useState("");

  const test1 = [
    {
      label: "Full Name",
      name: "full_name",
      type: "text",
      hideWhen: "avatar",
      disable: "age",
      placeholder: "Your full name",
      icon: "fa:fa-user",
      iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
      rules: [{ required: true, message: "Name is required" }],
      colSpan: { xs: 24, sm: 12, md: 12 },
    },
    //   {
    //     label: "Age",
    //     name: "age",
    //     type: "number",
    //     hideWhen: "avatar",
    //     placeholder: "Enter your age",
    //     icon: "fa:fa-hashtag",
    //     iconStyle: { fontSize: "16px", color: "orange", margin: "0 6px" },
    //     rules: [{ required: true, message: "Age is required" }],
    //     colSpan: { xs: 24, sm: 6, md: 6 },
    //   },
    {
      label: "Profile Picture2",
      name: "avatar2",
      type: "upload",
      accept: "image/*",
      icon: "fa:fa-image",
      iconStyle: { fontSize: "16px", color: "#27ae60", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 12 },
      rules: [{ required: true, message: "Profile picture is required" }],
    },
    {
      label: "Date of Joining",
      name: "joining_date",
      hideWhen: "age",
      type: "date",
      placeholder: "Select joining date",
      icon: "fa:fa-calendar-plus",
      iconStyle: { fontSize: "16px", color: "#8e44ad", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 6 },
      rules: [{ required: true, message: "Joining date is required" }],
    },
    {
      label: "Available Time",
      name: "available_time",
      hideWhen: "joining_date",
      type: "time",
      placeholder: "Pick a time",
      icon: "fa:fa-clock",
      iconStyle: { fontSize: "16px", color: "#34495e", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 6 },
    },
    {
      label: "Department",
      name: "department",
      hideWhen: "available_time",
      type: "select",
      // onChange: (val, field, input) => {
      //   selectedCountry.current = val;

      //   // 🔁 Dynamically update the skills field's options
      //   const skillsField = formFields.find((f) => f.name === "skills");
      //   if (skillsField) {
      //     skillsField.options =
      //       val === "Marketing"
      //         ? [
      //             { label: "Python", value: "py" },
      //             { label: "React", value: "react" },
      //           ]
      //         : val === "Engineering"
      //         ? [
      //             { label: "JavaScript", value: "js" },
      //             { label: "Node.js", value: "node" },
      //           ]
      //         : [];
      //   }

      //   // 🧠 Now force dropdown re-render manually (optional)
      //   const skillsInput = form.querySelector(`[name="skills"]`);
      //   if (skillsInput) {
      //     const event = new Event("focus");
      //     skillsInput.dispatchEvent(event);
      //   }
      // },
      placeholder: "Select department",
      options: ["Engineering", "Marketing", "HR", "Finance"],
      icon: "fa:fa-briefcase",
      iconStyle: { fontSize: "16px", color: "#e67e22", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 8 },
      disable: "skills",
    },
    {
      label: "Your Age or DOB",
      name: "ageInfo",
      type: "ageordate",
      required: true,
      colSpan: { xs: 24, sm: 12, md: 8 },
    },
    {
      label: "Skills",
      disable: "skills2",

      name: "skills",
      type: "select",
      // onChange: (value) => {
      //   setSelectedCountry2(value);
      //   console.log(selectedCountry2, "ddddddddddd");
      //   console.log(typeof value, value, "0066660");
      //   console.log(formData.current, "111"); // ⬅️ Dynamically update country
      // },
      placeholder: "Type or select skill",
      options:
        selectedCountry === "Marketing"
          ? [
              { label: "Python", value: "py" },
              { label: "React", value: "react" },
            ]
          : selectedCountry === "Engineering"
          ? [
              { label: "JavaScript", value: "js" },

              { label: "Node.js", value: "node" },
            ]
          : [
              { label: "Python", value: "py" },
              { label: "React", value: "react" },
            ],

      icon: "fa:fa-code",
      iconStyle: { fontSize: "16px", color: "#2c3e50", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 8 },
    },

    {
      label: "Skills2",
      name: "skills2",
      type: "autocomplete",
      placeholder: "Type or select skill",
      options:
        selectedCountry2 === "py" || "Python"
          ? [
              { label: "Python1", value: "py1" },
              { label: "React1", value: "react1" },
            ]
          : selectedCountry2 === "js"
          ? [
              { label: "JavaScript", value: "js" },

              { label: "Node.js", value: "node" },
            ]
          : [{ label: "Python2", value: "py3" }],

      icon: "fa:fa-code",
      iconStyle: { fontSize: "16px", color: "#2c3e50", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 8 },
    },
    {
      label: "Bio",
      disable: "location_access",
      name: "bio",
      type: "textarea",
      placeholder: "Write something about yourself...",
      rows: 5,
      icon: "fa:fa-pencil-alt",
      iconStyle: { fontSize: "16px", color: "#7f8c8d", margin: "0 6px" },
      colSpan: { xs: 24, sm: 24, md: 12 },
    },
    {
      label: "Location Access",

      name: "location_access",
      type: "switch",
      disable: "contact_method",
      icon: "fa:fa-map-marker-alt",
      iconStyle: { fontSize: "16px", color: "#c0392b", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 6 },
    },
    {
      label: "Accept Terms & Conditions",
      name: "accept_terms2",
      type: "checkbox",
      icon: "fa:fa-check",
      iconStyle: { fontSize: "16px", color: "#16a085", margin: "0 6px" },
      rules: [{ required: true, message: "You must accept the terms" }],
      colSpan: { xs: 24, sm: 12, md: 6 },
    },
    {
      label: "Preferred Contact Method",
      name: "contact_method",
      type: "radio",
      icon: "fa:fa-phone-alt",
      hideWhen: "accept_terms",
      iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
      options: ["Email", "Phone", "WhatsApp"],
      colSpan: { xs: 24, sm: 12, md: 8 },
    },
    {
      type: "radio",
      rules: [{ required: true, message: "You must accept the terms" }],
      name: "selection",
      label: "Choose Option",
      options: ["show", "hide", "maybe"],
      colSpan: { xs: 24, sm: 12, md: 24 },
    },
    {
      type: "text",
      placeholder: "Your info",
      name: "extraInfo",
      label: "More Info",
      showWhen: "selection",
      showValue: ["show", "maybe"], // Multiple show values
    },
    {
      label: "Accept Terms & Conditions",
      name: "accept_terms3",
      type: "checkbox",
      showWhen: "selection",
      showValue: ["show", "maybe"],
      icon: "fa:fa-check",
      iconStyle: { fontSize: "16px", color: "#16a085", margin: "0 6px" },
      rules: [{ required: true, message: "You must accept the terms" }],
      colSpan: { xs: 24, sm: 12, md: 6 },
    },
    {
      label: "Skills2",
      name: "skills4",
      showWhen: "selection",
      showValue: ["show", "maybe"],
      type: "autocomplete",
      placeholder: "Type or select skill",
      options: [{ label: "Python2", value: "py3" }],

      icon: "fa:fa-code",
      iconStyle: { fontSize: "16px", color: "#2c3e50", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 8 },
    },
    {
      label: "Profile Picture",
      showWhen: "selection",
      showValue: ["show", "maybe"],
      name: "avatar",
      type: "upload",
      accept: "image/*",
      icon: "fa:fa-image",
      iconStyle: { fontSize: "16px", color: "#27ae60", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 12 },
      rules: [{ required: true, message: "Profile picture is required" }],
    },
    {
      label: "Date of Joining1",
      name: "joining_date2",
      type: "date",
      placeholder: "Select joining date",
      icon: "fa:fa-calendar-plus",
      iconStyle: { fontSize: "16px", color: "#8e44ad", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 6 },
      rules: [{ required: true, message: "Joining date is required" }],
    },
    {
      label: "Available Time",
      name: "available_time2",

      type: "time",
      placeholder: "Pick a time",
      icon: "fa:fa-clock",
      iconStyle: { fontSize: "16px", color: "#34495e", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 6 },
    },
    {
      label: "Department",
      name: "department21",
      showWhen: "selection",
      showValue: ["show", "maybe"],
      hideWhen: "available_time",
      type: "select",

      placeholder: "Select department",
      options: ["Engineering", "Marketing", "HR", "Finance"],
      icon: "fa:fa-briefcase",
      iconStyle: { fontSize: "16px", color: "#e67e22", margin: "0 6px" },
      colSpan: { xs: 24, sm: 12, md: 8 },
      disable: "skills4",
    },
    {
      label: "Your Age or DOB",
      showWhen: "selection",
      showValue: ["show", "maybe"],
      name: "ageInfo2",
      type: "ageordate",
      //   required: true,
      colSpan: { xs: 24, sm: 12, md: 8 },
    },
  ];

  const formRef = useRef(null);
  const [formData, setFormData] = useState({});

  function globalInputChange(name, value, fieldConfig, data) {
    setFormData(data); // 🧠 always persist data

    console.log("🔄 Global Change:", name, value, data);
  }

  function handleSubmit(data, form, formFields) {
    resetFormFields(form, formFields);
    console.log("✅ Final Submit Data:", data);
  }

  useEffect(() => {
    if (formRef.current) formRef.current.innerHTML = "";
    console.log(formData, "pppppppppppppppppppppp");

    createForm("form-container2", test1, handleSubmit, {
      onChange: globalInputChange,
      labelColor: "pink",
      textColor: "pink",
      label: "notouch",
      defaultValues: formData, // 💾 Rehydrate values
    });
  }, [selectedCountry, selectedCountry2, formRef]); // 👈 re-render on country switch

  // Note-related logic

  const createNewNote = () => {
    const newId = Date.now();
    const newNotes = [...notes, newId];
    setNotes(newNotes);
    setCurrentNote(newId);
    localStorage.setItem("all-note-ids", JSON.stringify(newNotes));
  };

  const loadNote = (noteId) => {
    setCurrentNote(noteId);
  };

  const handleSave = () => {
    localStorage.setItem("all-note-ids", JSON.stringify(notes));
  };

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("all-note-ids")) || [];
    const valid = savedIds.length > 0 ? savedIds : [1];
    setNotes(valid);
    setCurrentNote(valid[valid.length - 1]);
  }, []);

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
      <C1 />
      <C2 />
      <C3 />
      <C4 />
      <div className="border-box" />
      <div className=" bg-white" ref={formRef} id="form-container2" />
    </div>
  );
}

export default App;
