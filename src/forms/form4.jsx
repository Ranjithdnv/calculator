const form4 = [
  {
    label: "fullname",
    name: "fullname",
    type: "text",
    disable: "email",
    placeholder: "fullname",
    icon: "fa:fa-user",
    colSpan: { md: 12, sm: 12 },
    rules: [
      { required: true, message: "enter your fullname" },
      { min: 4, message: "min 4letters" },
    ],
  },

  {
    label: "email",
    name: "email",
    disable: "profession",
    placeholder: "email",
    type: "email",
    colSpan: { md: 12, sm: 12 },
    rules: [
      { required: true, message: "enter email" },
      { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "enter vaild email" },
    ],
  },
  {
    label: "what profession",
    type: "select",
    name: "profession",
    hideWhen: "role",
    options: [
      { label: "engineer", value: "eng" },
      { label: "teacher", value: "teach" },
    ],
  },
  {
    label: "what role",
    type: "autocomplete",
    hideWhen: "date",
    name: "role",
    rules: [{ required: true, message: "enter your role" }],
    options: [
      { label: "engineer", value: "eng" },
      { label: "teacher", value: "teach" },
    ],
  },
  {
    label: "date of birth",
    name: "date",
    hideWhen: "time",
    type: "date",
    colSpan: { sm: 12 },
  },
  { label: "date of time", name: "time", type: "time", colSpan: { sm: 12 } },
  {
    label: "enter your phone mno",
    placeholder: " enter ph no",
    type: "phone",
    name: "phone",
    rules: [
      { min: 10, message: "please enter 10 numbers" },
      { max: 10, message: "enter only 10 numbres" },
    ],
    colSpan: { sm: 8 },
  },
  {
    label: "enter your photo",
    name: "photo",

    type: "upload",
    icon: "fa:fa-user",
    rules: [{ required: true, message: "enter your enter your photo" }],
  },
  {
    type: "radio",
    name: "loginpage",
    label: "sigin/singup",
    options: ["login", "singup"],
  },
  {
    type: "text",
    name: "username",
    label: "username",
    placeholder: "enter username",
    showWhen: "loginpage",
    showValue: ["login", "singup"],
  },
  {
    type: "textarea",
    name: "address",
    label: "address",
    placeholder: "enter username",
    showWhen: "loginpage",
    showValue: ["singup"],
  },
];

export default form4;
