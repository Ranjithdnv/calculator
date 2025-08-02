// import { useState, useRef, useEffect, useMemo } from "react";
// import "./App.css";

// import { easzyForm, resetFormFields } from "easzy-formjs";
// import test1 from "./forms/form2.jsx";
// function App() {
//   function handleSubmit(data, form, formFields) {
//     console.log(data);
//     const formData = new FormData(form);

//     console.log("FormData values:");
//     for (let [key, value] of formData.entries()) {
//       if (value instanceof File) {
//         console.log(
//           `${key}: File ->`,
//           value.name,
//           value.type,
//           value.size + " bytes"
//         );
//       } else {
//         console.log(`${key}:`, value);
//       }
//     }

//     const pdfFile = formData.get("resume");
//     if (pdfFile && pdfFile.type === "application/pdf") {
//       console.log(" PDF File selected:", pdfFile.name);
//     } else {
//       console.warn(" No PDF file selected or wrong type.");
//     }

//     alert(" Form submitted successfully!");

//     resetFormFields(form, formFields);
//   }
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({});

//   function globalInputChange(name, value, fieldConfig, data) {
//     setFormData(data);

//     console.log(" Global Change:", name, value, data);
//   }

//   function handleSubmit(data, form, formFields) {
//     resetFormFields(form, formFields);
//     console.log(" Final Submit Data:", data);
//   }

//   useEffect(() => {
//     easzyForm("form-container2", test1, handleSubmit, {
//       onChange: globalInputChange,
//       labelColor: "green",
//       textColor: "violet",
//       //label: "notouch",
//     });
//   }, []);

//   return (
//     <div className=" ">
//       <div
//         className="  bg-white dark:bg-black py-10"
//         ref={formRef}
//         id="form-container2"
//       />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormOne from "./pages/FormOne";
import FormTwo from "./pages/FormTwo";
import FormThree from "./pages/FormThree";
import FormFour from "./pages/FormFour";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <nav className="flex gap-6 mb-6">
          <Link to="/form1">Form One</Link>
          <Link to="/form2">Form Two</Link>
        </nav>

        <Routes>
          <Route path="/form1" element={<FormOne />} />{" "}
          <Route path="/form4" element={<FormFour />} />
          <Route path="/form2" element={<FormTwo />} />
          <Route path="/form3" element={<FormThree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
