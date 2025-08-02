import { useFormHandler } from "../hook/hook";
import form2 from "../forms/form2";

function FormTwo() {
  const handleSubmit = async (data, form, fields) => {
    const formDataObj = new FormData(form);

    try {
      const response = await fetch("https://3000", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Error submitting form");
    }
  };

  const { formRef } = useFormHandler("form-two", form2, handleSubmit);

  return (
    <div>
      <div
        id="form-two"
        ref={formRef}
        className="bg-white dark:bg-black py-10"
      />
    </div>
  );
}

export default FormTwo;
