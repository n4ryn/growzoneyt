"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    const { name, email, phone, message } = form;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      newErrors.email = "Invalid email address";

    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    try {
      await emailjs.send(
        "service_czo60ho",
        "template_v1te34d",
        templateParams,
        "PUg8MN94E74Mfpkz5"
      );
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center bg-red-500 text-white w-full py-4 rounded-2xl">
        Contact
      </h1>
      <div className="flex flex-col gap-6 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 border-base-300 rounded-box border p-6 shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className={`input w-full ${errors.name ? "input-error" : ""}`}
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className={`input w-full ${errors.email ? "input-error" : ""}`}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className={`input w-full ${errors.phone ? "input-error" : ""}`}
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="label">Message</label>
            <textarea
              name="message"
              className={`textarea w-full ${
                errors.message ? "textarea-error" : ""
              }`}
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-green-700 text-white mt-4 w-full"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
