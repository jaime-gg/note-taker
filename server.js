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

// API ROUTES -----------------------------------------------------------------------------------------------------------------------------------
app.route("/api/notes")
    .get( (req, res) => {
        let noteData = fs.readFileSync('./db/db.json');
        let rawNoteData = JSON.parse(noteData);
        res.json(rawNoteData)
    })
    .post((req, res) => {
        let newJsonFile = path.join(__dirname, "./db/db.json");
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
            fs.readFile(newJsonFile, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    // PARSE DATA FROM STRING 
                    const noteData = JSON.parse(data)

                    // PUSH NEW NOTE 
                    noteData.push(newNote)

                    //UPDATE THE DB.JSON 
                    fs.writeFile(
                        newJsonFile,
                        JSON.stringify(noteData, null, 2), 
                        (err) =>
                            err
                                ? console.error(err)
                                : console.info('Successfully updated database!')
                    ); 
                };  
            }); 
            //BEFORE FINISHING, UPDATE THE PAGE TO INCLUDE THE
            res.json(newNote)
        };
    }); 
    
// WHEN THE PORT IS OPENED, LET THE USER KNOW AND PROVIDE LINK TO LOCAL HOST --------------------------------------------------------------------

// IF THE QUERY IS NOT VALID, DIRECT USER TO THE ROOT (INDEX.HTML)
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! Found at http://localhost:${PORT}`);
});