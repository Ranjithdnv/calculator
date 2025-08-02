import React from "react";
import { useFormHandler } from "../hook/hook";
import form4 from "../forms/form4";
const FormFour = () => {
  const { formref } = useFormHandler("formid4", form4);
  return (
    <div>
      <div id="formid4"></div>
    </div>
  );
};

export default FormFour;
