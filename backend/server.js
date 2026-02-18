// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection using environment variable
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  service: { type: String },
  description: { type: String },
});
 
// Model
const Contact = mongoose.model("Contact", ContactSchema);

// API route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, number, service, description } = req.body;

    // basic validation
    if (!name || !email || !number) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    const contact = new Contact({ name, email, number, service, description });
    await contact.save();

    res.status(201).json({ message: "✅ Submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "❌ Something went wrong while saving data." });
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost${PORT}`));
