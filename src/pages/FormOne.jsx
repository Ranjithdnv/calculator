import { useFormHandler } from "../hook/hook";
import form1 from "../forms/form1";

function FormOne() {
  const { formRef } = useFormHandler("form-one", form1);

  return (
    <div id="form-one" ref={formRef} className="bg-white dark:bg-black py-10" />
  );
}

export default FormOne;
