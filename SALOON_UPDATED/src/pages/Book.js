const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',   // Use your host (e.g., 'localhost')
  user: 'root',        // Your database username
  password: '1234',        // Your database password
  database: 'chop', // The name of your database
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Route to handle POST requests for booking
app.post('/submit', (req, res) => {
  const { service, location, date, time } = req.body;

  // Validate incoming data
  if (!service || !location || !date || !time) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Insert the booking data into MySQL database
  const query = 'INSERT INTO bookings (service, location, date, time) VALUES (?, ?, ?, ?)';
  db.query(query, [service, location, date, time], (err, result) => {
    if (err) {
      console.error('Error inserting booking:', err);
      return res.status(500).json({ message: 'Failed to save booking' });
    }

    console.log('Booking saved:', result);
    res.status(200).json({ message: 'Booking successfully saved' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
