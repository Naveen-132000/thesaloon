// import express from 'express';
// import bodyParser from 'body-parser';
// import mysql from 'mysql2';
// import cors from 'cors';

// const app = express();
// const port = 3000;

// // Enable CORS to allow cross-origin requests from your frontend
// app.use(cors());

// // Middleware to parse incoming JSON requests
// app.use(bodyParser.json());

// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: 'localhost', // Replace with your MySQL host if not local
//   user: 'root', // Replace with your MySQL username
//   password: 'root123', // Replace with your MySQL password
//   database: 'onlinedb', // The name of your database
// });

// // Check if the MySQL connection is successful
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the MySQL database.');
// });

// // Route to handle form submission
// // Updated POST endpoint
// app.post('/ntact', (req, res) => {
//     const { name, email, subject, message } = req.body;

//     if (!name || !email || !subject || !message) {
//         console.error('Validation error: Missing fields in the request body');
//         return res.status(400).json({ error: 'All fields are required!' });
//     }

//     const sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
//     db.query(sql, [name, email, subject, message], (err, result) => {
//         if (err) {
//             console.error('Database error:', err); // Log the error
//             return res.status(500).json({ error: 'Database operation failed!' });
//         }

//         res.status(200).json({ message: 'Contact form submitted successfully!' });
//     });
// });
