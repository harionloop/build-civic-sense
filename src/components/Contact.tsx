'use client';

import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitMessage(
          "Message sent successfully! We'll get back to you shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setSubmitMessage("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-[calc(100vh-6rem)]">
      <h2 className="text-3xl font-bold themed-text mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left side for contact information */}
        <div className="glass-card rounded-3xl p-8">
          <h4 className="text-xl font-bold themed-text mb-4">
            Contact Information
          </h4>
          <p className="text-md themed-subtext mb-6">
            Fill up the form to reach out to us.
          </p>
          <div className="flex flex-col space-y-6">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 themed-link flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-1 7.07V21h2v-1.93c3.29-.68 6-3.69 6-7.07h-2c0 2.53-1.93 4.54-4 4.93V17h-2v-1.93c-2.07-.39-4-2.4-4-4.93H3c0 3.38 2.71 6.39 6 7.07z" />
              </svg>
              <div className="ml-4">
                <p className="font-semibold themed-card-text">Address</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  123 Civic Street, Community City
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 themed-link flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div className="ml-4">
                <p className="font-semibold themed-card-text">Email</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  contact@civicsense.com
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 themed-link flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 15.546c-1.571-2.062-4.205-3.04-7.53-3.04-3.326 0-5.959.978-7.53 3.04l-1.47 1.937c-1.042.483-1.52.898-1.52 1.494 0 1.498 1.258 2.552 2.784 2.552 1.527 0 2.785-1.054 2.785-2.552 0-.596-.478-1.01-1.52-1.494l-1.47-1.937c1.571-2.062 4.205-3.04 7.53-3.04s5.959.978 7.53 3.04l-1.47-1.937c-1.042-.483-1.52-.898-1.52-1.494 0-1.498 1.258-2.552 2.784-2.552 1.527 0 2.785-1.054 2.785-2.552 0-.596-.478-1.01-1.52-1.494l-1.47-1.937zM12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 7.07V21h2v-1.93c3.29-.68 6-3.69 6-7.07h-2c0 2.53-1.93 4.54-4 4.93V17h-2v-1.93c-2.07-.39-4-2.4-4-4.93H3c0 3.38 2.71 6.39 6 7.07z" />
              </svg>
              <div className="ml-4">
                <p className="font-semibold themed-card-text">Phone</p>
                <p className="text-sm themed-card-subtext opacity-80">
                  +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right side for contact form */}
        <div className="glass-card rounded-3xl p-8">
          <h4 className="text-xl font-bold themed-text mb-4">Send a Message</h4>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg input-field transition-colors duration-300"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitMessage && (
              <p className="text-center mt-4 themed-text">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

