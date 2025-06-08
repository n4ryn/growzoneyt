"use client";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = form;
    const subject = encodeURIComponent(`New query from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:vinay@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Query?</legend>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <label className="label">Message</label>
        <textarea
          name="message"
          className="textarea"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button className="btn btn-neutral mt-4" onClick={handleSubmit}>
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default Contact;
