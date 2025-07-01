import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast.success("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl text-indigo-600 font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-700 text-md md:text-lg">
        Have questions, suggestions, or need help? Fill out the form below and
        we'll get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block mb-1 font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full border px-4 py-2 border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-700"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@gmail.com"
            required
            className="w-full border px-4 py-2 border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-700"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Type your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-700"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
