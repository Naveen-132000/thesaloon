const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",           // Your MySQL username
  password: "1234",    // Your MySQL password
  database: "chop",     // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Successfully connected to MySQL database using MySQL Workbench");
});

// Route to handle form submission for bookings
app.post("/submit", async (req, res) => {
  console.log("Received POST request on /submit");
  const { service, location, date, time } = req.body;

  if (!service || !location || !date || !time) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = "INSERT INTO appointments (treatment, location, appointment_date, appointment_time) VALUES (?, ?, ?, ?)";

  try {
    const result = await db.promise().query(query, [service, location, date, time]);
    console.log("Booking saved:", result);
    res.status(200).json({ message: "Booking successfully saved" });
  } catch (err) {
    console.error("Error inserting booking:", err);
    return res.status(500).json({ message: "Failed to save booking" });
  }
});

// Route to handle form submission for contact messages
app.post("/submit-contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
  try {
    const result = await db.promise().query(query, [name, email, subject, message]);
    console.log("Contact message saved:", result);
    res.status(200).json({ message: "Message submitted successfully" });
  } catch (err) {
    console.error("Error inserting contact message:", err);
    return res.status(500).json({ message: "Failed to submit message" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/submit`);
});

const fetchLocationFromService = async () => {
  const response = await fetch('https://api.microsoft.com/location'); // Replace with actual endpoint
  if (!response.ok) throw new Error('Network response was not ok');
  return await response.json();
};
