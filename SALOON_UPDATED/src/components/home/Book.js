import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser'; // Added for parsing POST request body

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Body parser middleware to handle JSON
app.use(bodyParser.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',          // Host for your MySQL instance
  user: 'root',               // MySQL username
  password: '1234',        // MySQL password
  database: 'chop',         // Your database/schema name
  port: 3306                  // Default MySQL port, change if your MySQL instance uses a different port
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Handle the POST request at /submit
app.post('/submit', (req, res) => {
  const { service, location, date, time } = req.body;

  if (!service || !location || !date || !time) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Insert into bookings table
  const query = 'INSERT INTO bookings(service, location, date, time) VALUES (?, ?, ?, ?)';
  console.log('Received data:', { service, location, date, time }); // Log input data
  db.query(query, [service, location, date, time], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err); // Log the full error object
      return res.status(500).json({ message: 'Failed to save bookings', error: err.message }); // Ensure JSON response
    }
    res.status(200).json({ message: 'Booking saved successfully', bookingId: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app; // If you need to export the app
