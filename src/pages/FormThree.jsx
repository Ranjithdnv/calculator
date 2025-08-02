import React from "react";
import { useFormHandler } from "../hook/hook";
import test3 from "../forms/form3";
const FormThree = () => {
  const { formRef } = useFormHandler("form-3", test3);
  return (
    <div>
      <div id="form-3" ref={formRef}></div>
    </div>
  );
};

export default FormThree;
