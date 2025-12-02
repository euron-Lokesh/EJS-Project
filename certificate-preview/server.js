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
    res.render('classic-resume-template', { data: resumeData });
});

// Route to display resume template 2
app.get('/resume-2', (req, res) => {
    res.render('multi-column-resume-template', { data: resumeData });
});

// Route to display resume template 3
app.get('/resume-3', (req, res) => {
    res.render('executive-resume-template', { data: resumeData });
});

// Route to display cover letter
app.get('/cover-letter', (req, res) => {
    res.render('cover-letter-template-1', { data: coverLetterData });
});

// Route to display cover letter template 2
app.get('/cover-letter-2', (req, res) => {
    res.render('cover-letter-template-2', { data: coverLetterData });
});

// Route to display cover letter template 3 (Purple Theme)
app.get('/modern-cover-letter', (req, res) => {
    res.render('modern-cover-letter-template', { data: coverLetterData });
});

// Route to display modern resume template
app.get('/modern-resume', (req, res) => {
    res.render('modern-resume', { data: resumeData });
});

// Route to display minimalist resume template
app.get('/minimalist-resume', (req, res) => {
    res.render('minimalist_resume_template', { data: resumeData });
});
3
// Route to display entry level resume template
app.get('/entry-level-resume', (req, res) => {
    res.render('entry_level_template', { data: resumeData });
});


// Route to display entry level resume template
app.get('/charcoal-glow-resume', (req, res) => {
    res.render('charcoal_glow_template', { data: resumeData });
});

// Route to display professional resume template
app.get('/simply-blue-resume', (req, res) => {
    res.render('simply_blue_resume_template', { data: resumeData });
});

// Route to display professional resume template
app.get('/sage-multi-column-resume', (req, res) => {
    res.render('sage_multi_column_resume_template', { data: resumeData });
}); 

// Route to display professional resume template
app.get('/obsidian-edge-resume', (req, res) => {
    res.render('obsidian_edge_resume_template', { data: resumeData });
});

// Route to display professional resume template
app.get('/corporate-resume', (req, res) => {
    res.render('corporate_resume_template', { data: resumeData });
});

// Route to display professional resume template
app.get('/antique-resume-template', (req, res) => {
    res.render('antique_resume_template', { data: resumeData });
});

// Route to display professional resume template
app.get('/orangewhite-modern-template', (req, res) => {
    res.render('orangewhite_modern_template', { data: resumeData });
});



// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`- Cover Letter Template 1: http://localhost:${PORT}/cover-letter`);
    console.log(`- Cover Letter Template 2: http://localhost:${PORT}/cover-letter-2`);
    console.log(`- Cover Letter Template 3 (Purple): http://localhost:${PORT}/modern-cover-letter`);
    console.log(`- Certificate: http://localhost:${PORT}/certificate`);
    console.log(`- Resume Template 1: http://localhost:${PORT}/resume`);
    console.log(`- Resume Template 2: http://localhost:${PORT}/resume-2`);
    console.log(`- Resume Template 3: http://localhost:${PORT}/resume-3`);
    console.log(`- Minimalist Resume Template: http://localhost:${PORT}/minimalist-resume`);
    console.log(`- Charcoal Glow Resume Template: http://localhost:${PORT}/charcoal-glow-resume`);
    console.log(`- Simply Blue Resume Template: http://localhost:${PORT}/simply-blue-resume`);
    console.log(`- Sage Multi-Column Resume Template: http://localhost:${PORT}/sage-multi-column-resume`);
    console.log(`- Obsidian Edge Resume Template: http://localhost:${PORT}/obsidian-edge-resume`);
    console.log(`- Corporate Resume Template: http://localhost:${PORT}/corporate-resume`);
    console.log(`- Antique Resume Template: http://localhost:${PORT}/antique-resume-template`);
    console.log(`- Orange White Modern Template: http://localhost:${PORT}/orangewhite-modern-template`);
});