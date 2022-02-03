// DEPENDENCIES AND BOILERPLATE CODE ------------------------------------------------------------------------------------------------------------
const express = require('express');
const fs = require('fs');
const path = require('path');
const noteData = require('./db/db.json');

// UNLESS OTHERWISE STATED, OPEN ON THE 3001 PORT
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE FUNCTIONS FOR DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// SETS UP THE 'PUBLIC' FILE ASSETS AS STATIC FILES
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


// POST METHOD -------------------------------------------------------------------------------------------------

app.post('/api/notes', (req, res) => {
    //DESTRUCTURING THE PROVIDED DATA
    const {title, text} = req.body;
    // IF ALL WAS SUBMITTED CORRECTLY 
    if (title && text) {
        // CREATE A NEW VARIABLE FOR THE NEW NOTE
        const newNote = {
            title, 
            text, 
            // add an id later for deletion purposes
        };

        // PULL THE EXISTING JSON DATA
            // PATH, BUFFER ENCODING, ERROR HANDELING, AND DATA STRING
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // PARSE DATA FROM STRING 
                const note = JSON.parse(data)

                // PUSH NEW NOTE 
                note.push(newNote)

                //UPDATE THE DB.JSON 
                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(note, null, 2), 
                    (err) =>
                        err
                            ? console.error(err)
                            : console.info('Successfully updated database!')
                ); 
            };  
        }); 

        const response = {
            status: 'success',
            body: newNote,
        }
        res.json(response)
    };
});

// WHEN THE PORT IS OPENED, LET THE USER KNOW AND PROVIDE LINK TO LOCAL HOST --------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! Found at http://localhost:${PORT}`);
});