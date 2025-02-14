const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from public directory
app.use(express.static('public'));

// Sample certificate data
const certificateData = {
    certificateId: "a6e57e8b-2692-4a3e-937d-ad07d6281fdb",
    courseTitle: "C++ Mastery",
    firstName: "Lokesh",
    lastName: "Dwivedi",
    issueDate: "14/02/2025",
    directorName: "Sudhanshu Kumar"
};

// Route to display certificate
app.get('/certificate', (req, res) => {
    res.render('certificate', certificateData);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/certificate`);
});