import React from "react";
import { ChildGutter2 } from "easzy-form";

const formFields4 = [
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
const C2 = () => {
  // const [form] = Form.useForm();
  return (
    <div>
      <ChildGutter2 formFields={formFields4} />{" "}
    </div>
  );
};

export default C2;
