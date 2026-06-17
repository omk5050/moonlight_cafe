import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Reservation from './models/reservation.model.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error('Error: MONGODB_URI is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB Atlas.'))
  .catch((err) => {
    console.error('MongoDB Atlas connection error:', err);
    process.exit(1);
  });

// API Routes
// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend service is running smoothly.' });
});

// GET all reservations (sorted by newest)
app.get('/api/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch (err) {
    console.error('Error fetching reservations:', err);
    res.status(500).json({ error: 'Server error while retrieving reservations.' });
  }
});

// POST new reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests } = req.body;

    // Validation
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const numGuests = Number(guests);
    if (isNaN(numGuests) || numGuests < 1) {
      return res.status(400).json({ error: 'Number of guests must be at least 1.' });
    }

    // Create reservation record
    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      guests: numGuests
    });

    const savedReservation = await newReservation.save();
    res.status(201).json({
      message: 'Reservation created successfully!',
      reservation: savedReservation
    });
  } catch (err) {
    console.error('Error saving reservation:', err);
    res.status(500).json({ error: 'Failed to save reservation. Please try again.' });
  }
});

// Serve static assets in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

app.use(express.static(distPath));

app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts('html')) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    next();
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
