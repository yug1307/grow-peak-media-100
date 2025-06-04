import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    whatsapp: "",
    service: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await addDoc(collection(db, "contacts"), {...formData, createdAt: Timestamp.now(),});
      setStatus("Form submitted successfully!");
      setFormData({ name: "", email: "", whatsapp: "", service: "", description: "" });
    } 
    catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="p-3"> 
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-6 p-6 bg-gray-300 shadow-md rounded-md space-y-4">
      <h2 className="text-xl text-blue-600 font-bold mb-4">Get in Touch</h2>

      <div>
        <label className="text-l text-blue-600 block font-semibold">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required
          className="w-full p-2 border rounded-md"/>
      </div>
 
      <div>
        <label className="text-l text-blue-600 block font-semibold">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required
          className="w-full p-2 border rounded-md"/>
      </div>

      <div>
        <label className="text-l text-blue-600 block font-semibold">WhatsApp Number</label>
        <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} 
        placeholder="+91XXXXXXXXXX" required className="w-full p-2 border rounded-md"/>
      </div>

      <div>
        <label className="text-l text-blue-600 block font-semibold">Service</label>
        <select name="service" value={formData.service} onChange={handleChange} required
          className="w-full p-2 border rounded-md">
          
          <option value="Video Production">Video Production</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Social Media Setup">Social Media Setup</option>
          <option value="Brand Launch Packages">Brand Launch Packages</option>
        </select>
      </div>

      <div>
        <label className="text-l text-blue-600 block font-semibold">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="4"
          placeholder="Tell us more about your project..."
          className="w-full p-2 border rounded-md"></textarea>
      </div>

      <button type="submit" className="bg-blue-600 text-white w-full px-4 py-2 rounded-md hover:bg-green-700 transition">Submit</button>

      {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
    </form>
    </div>
  );
};

export default ContactForm;
