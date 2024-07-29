const express = require('express');
const router = express.Router();
const db = require('./database');

// Create a new record
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send(`User added with ID: ${results.insertId}`);
  });
});

// Read all records
router.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Read a single record by ID
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results[0]);
  });
});

// Update a record by ID
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(query, [name, email, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User updated successfully');
  });
});

// Delete a record by ID
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User deleted successfully');
  });
});

module.exports = router;
