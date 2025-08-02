import { useState, useRef, useEffect } from "react";
import { easzyForm, resetFormFields } from "easzy-formjs";

export function useFormHandler(formId, formFields, onSubmit) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({});

  const handleGlobalChange = (name, value, fieldConfig, data) => {
    console.log("Global Change:", name, value, data);
    setFormData(data);
  };

  const handleSubmit = (data, form, fields) => {
    console.log("Submit Data from Hook:", data);

    if (onSubmit) {
      onSubmit(data, form, fields);
    }

    resetFormFields(form, fields);
  };

  useEffect(() => {
    easzyForm(formId, formFields, handleSubmit, {
      onChange: handleGlobalChange,
      labelColor: "red",
      textColor: "black",
    });
  }, []);

  return {
    formRef,
    formData,
    setFormData,
  };
}
