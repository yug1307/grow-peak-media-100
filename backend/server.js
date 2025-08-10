const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// MongoDB Connection (Replace with your MongoDB URI if using Atlas)
mongoose.connect('mongodb://127.0.0.1:27017/grow_peak_media', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));

// Define Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  service: String,
  description: String
});

// Create Model
const Contact = mongoose.model('Contact', ContactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body); // create a new contact document
    await contact.save(); // save it to MongoDB
    res.status(201).json({ message: 'Submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while saving the data.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
