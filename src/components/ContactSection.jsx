"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email address";

    if (form.phone && form.phone.length < 10)
      newErrors.phone = "Phone number must be at least 10 digits";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await axios.post("../api/contact", form);
      setSuccess("Message sent successfully!");

      setTimeout(() => {
        setSuccess("");
      }, 3000);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setErrors({ api: "Something went wrong. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#fff5df] py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
        {/* LEFT INFO */}
        <div>
          <p className="text-yellow-500 font-semibold mb-2">
            ✦<span className="text-[#3b2615]"> CONTACT US</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b2615] mb-8">
            Stay direct connected with Wanderingwings today
          </h2>

          <div className="space-y-6">
            <InfoItem title="Contact" value="+91 9885689398" />
            <InfoItem title="Email" value="operations@wanderingwings.in" />
            <InfoItem
              title="Address"
              value="Survey No.132, Sriaruo Farms, Balehonniga village, Halaguru, Mandya, Karnataka-571421"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gradient-to-b from-[#3b2615] to-[#2b1d12] rounded-3xl p-8 md:p-10">
          <h3 className="text-white text-2xl font-bold mb-6">Send a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Field
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Field
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#5a4633] text-white placeholder-white/60 px-4 py-3 outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {errors.api && <p className="text-red-400 text-sm">{errors.api}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
            >
              {loading ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ name, value, onChange, placeholder, error }) => (
  <div>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg bg-[#5a4633] text-white placeholder-white/60 px-4 py-3 outline-none"
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const InfoItem = ({ title, value }) => (
  <div className="flex gap-4 items-start">
    <div className="w-12 h-12 rounded-full bg-yellow-400" />
    <div>
      <p className="font-semibold text-[#3b2615]">{title}</p>
      <p className="text-sm text-[#6b4a2f]">{value}</p>
    </div>
  </div>
);

export default ContactSection;
