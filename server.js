// STANDARD BOILERPLATE STUFF ---------------------------------------------------------------------------------------------------------------------
const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');

// UNLESS OTHERWISE STATED, OPEN ON THE 3001 PORT
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE FUNCTIONS FOR DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// SETS UP THE 'PUBLIC' FILES AS STATIC FILES
app.use(express.static('public'));


// SET ROUTES -----------------------------------------------------------------------------------------------------------------------------------
// SET THE ROOT OF THE APPLICATION TO BE THE INDEX.HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// ONCE THE USER CLICKS THE BUTTON ON THE ROOT GET THE NOTES.HTML FILE
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/api/notes', (req, res) => {
    res.json(noteData);
});
// IF THE QUERY IS NOT VALID, DIRECT USER TO THE ROOT (INDEX.HTML)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


// POST REQUESTS ----------------------------------------------------------------------------------------------------------------------------------


// WHEN THE PORT IS OPENED, LET THE USER KNOW AND PROVIDE LINK TO LOCAL HOST ----------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! Found at http://localhost:${PORT}`);
});