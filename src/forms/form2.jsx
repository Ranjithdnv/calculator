const test2 = [
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
  //     iconStyle: { fontSize: "16px", color: "#2980b9, margin: "0 6px" },
  //     rules: [{ required: true, message: "Age is required" }],
  //     colSpan: { xs: 24, sm: 6, md: 6 },
  //   },

  {
    label: "Date of Joining",
    name: "joining_date",
    hideWhen: "age",
    type: "date",
    placeholder: "Select joining date",
    icon: "fa:fa-calendar-plus",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
    rules: [{ required: true, message: "Joining date is required" }],
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
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 12 },
    disable: "skills",
  },
  {
    label: "state",
    name: "state",
    type: "autocomplete",
    placeholder: "Type or select skill",
    options: [{ label: "Python2", value: "py3" }],

    icon: "fa:fa-code",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 12 },
  },
  {
    label: "country",
    name: "country1",
    type: "autocomplete",
    placeholder: "Type or select skill",
    options: [{ label: "Python2", value: "py3" }],

    icon: "fa:fa-code",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 12 },
  },

  {
    label: "Skills",
    disable: "skills2",

    name: "skills",
    type: "autocomplete",
    // onChange: (value) => {
    //   setSelectedCountry2(value);
    //   console.log(selectedCountry2, "ddddddddddd");
    //   console.log(typeof value, value, "0066660");
    //   console.log(formData.current, "111"); // ⬅️ Dynamically update country
    // },
    placeholder: "Type or select skill",
    options: [
      { label: "Python", value: "py" },
      { label: "React", value: "react" },
    ],

    icon: "fa:fa-code",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 12 },
  },

  {
    label: "Skills2",
    name: "skills2",
    type: "autocomplete",
    placeholder: "Type or select skill",
    options: [{ label: "Python2", value: "py3" }],

    icon: "fa:fa-code",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 12 },
  },
  {
    label: "Date of Joining1",
    name: "joining_date2",
    type: "date",
    placeholder: "Select joining date",
    icon: "fa:fa-calendar-plus",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
    rules: [{ required: true, message: "Joining date is required" }],
  },
  {
    label: "Available Time",
    name: "available_time2",

    type: "time",
    placeholder: "Pick a time",
    icon: "fa:fa-clock",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
  },

  {
    label: "Accept Terms & Conditions",
    name: "accept_terms2",
    type: "checkbox",
    icon: "fa:fa-check",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    rules: [{ required: true, message: "You must accept the terms" }],
    colSpan: { xs: 24, sm: 12, md: 6 },
  },
  {
    label: "Bio",
    disable: "location_access",
    name: "bio",
    type: "textarea",
    placeholder: "Write something about yourself...",
    rows: 5,
    icon: "fa:fa-pencil-alt",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 24, md: 24 },
  },
  {
    label: "Location Access",

    name: "location_access",
    type: "switch",
    disable: "contact_method",
    icon: "fa:fa-map-marker-alt",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
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
    colSpan: { xs: 24, sm: 12, md: 6 },
  },
  {
    type: "radio",
    rules: [{ required: true, message: "You must accept the terms" }],
    name: "selection",
    label: "Choose Option",
    options: ["show", "hide", "maybe"],
    colSpan: { xs: 24, sm: 12, md: 6 },
  },
  {
    label: "Profile Picture2",
    name: "avatar2",
    type: "upload",
    accept: "image/*",
    icon: "fa:fa-image",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
    rules: [{ required: true, message: "Profile picture is required" }],
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
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
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
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
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
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
    rules: [{ required: true, message: "Profile picture is required" }],
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
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
    disable: "skills4",
  },
  {
    label: "Available Time",
    name: "available_time",
    hideWhen: "joining_date",
    type: "time",
    placeholder: "Pick a time",
    icon: "fa:fa-clock",
    iconStyle: { fontSize: "16px", color: "#2980b9", margin: "0 6px" },
    colSpan: { xs: 24, sm: 12, md: 6 },
  },
];

export default test2;
