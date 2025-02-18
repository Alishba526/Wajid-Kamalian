
'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    timeToBuy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "923369440865";
    const message = `Full Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ABudget: ${formData.budget}%0APlanning to Buy: ${formData.timeToBuy}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative px-4 bg-black"
    >
      <div className="absolute inset-0  bg-opacity-60"></div>

      <div className="flex items-center justify-between w-full max-w-2xl">
        <motion.img
          src="/1.jpg"
          alt="Client"
          className="w-32 h-34 rounded-full border-4 border-green-500 mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Right side text */}
        <motion.div
          className="text-white ml-8 w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg">Fill the form to connect with on WhatsApp</h4>
        </motion.div>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-12 rounded-lg shadow-xl text-white w-full max-w-2xl flex flex-col items-center backdrop-blur-lg bg-opacity-30 mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-3xl font-semibold mb-6">Fill the form to connect on WhatsApp</h2>

        <motion.input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 rounded-lg text-black focus:ring-2 focus:ring-green-400 transition"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 rounded-lg text-black focus:ring-2 focus:ring-green-400 transition"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 rounded-lg text-black focus:ring-2 focus:ring-green-400 transition"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.select
          name="timeToBuy"
          value={formData.timeToBuy}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 rounded-lg text-black focus:ring-2 focus:ring-green-400 transition"
          whileFocus={{ scale: 1.05 }}
        >
          <option value="">How Soon Are You Planning to Buy?</option>
          <option value="Immediately">Immediately</option>
          <option value="In 1 Month">In 1 Month</option>
          <option value="3-6 Months">3-6 Months</option>
        </motion.select>

        <motion.select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 rounded-lg text-black focus:ring-2 focus:ring-green-400 transition"
          whileFocus={{ scale: 1.05 }}
        >
          <option value="">Whats Your Budget?</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </motion.select>

        <motion.button
          type="submit"
          className="w-full bg-green-500 p-4 mt-6 rounded-lg text-black font-bold hover:bg-green-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Connect on WhatsApp
        </motion.button>
      </motion.form>
    </div>
  );
}
