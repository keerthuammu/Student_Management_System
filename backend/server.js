
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createPool({
    host: "database",
    user: "root",
    password: "root123",
    database: "student_db"
});

// Test backend
app.get("/", (req, res) => {
    res.send("Student API is running!");
});

// READ - Get all students
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// CREATE - Add student
app.post("/students", (req, res) => {
    const { name, email } = req.body;

    db.query(
        "INSERT INTO students (name, email) VALUES (?, ?)",
        [name, email],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Student added", id: result.insertId });
        }
    );
});

// UPDATE - Edit student
app.put("/students/:id", (req, res) => {
    const { name, email } = req.body;

    db.query(
        "UPDATE students SET name=?, email=? WHERE id=?",
        [name, email, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Student updated" });
        }
    );
});

// DELETE - Remove student
app.delete("/students/:id", (req, res) => {
    db.query(
        "DELETE FROM students WHERE id=?",
        [req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Student deleted" });
        }
    );
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});
