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

// Import resume sample data
const resumeData = require('./data/sampleResumeData');
// Import cover letter sample data
const coverLetterData = require('./data/sampleCoverLetterData');

// Route to display certificate
app.get('/certificate', (req, res) => {
    res.render('certificate', certificateData);
});

// Route to display resume template
app.get('/resume', (req, res) => {
    res.render('resume-template-1', { data: resumeData });
});

// Route to display cover letter
app.get('/cover-letter', (req, res) => {
    res.render('cover-letter-template-1', { data: coverLetterData });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`- Certificate: http://localhost:${PORT}/certificate`);
    console.log(`- Resume: http://localhost:${PORT}/resume`);
    console.log(`- Cover Letter: http://localhost:${PORT}/cover-letter`);
});