const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
let filePath = path.join(__dirname, '../../db/db.json');

// This should receive all the saved notes
router.get('/', function (req, res) {
fs.readFile(filePath, 'utf8', function (err, db) {
    if(err) throw err;
    db = JSON.parse(db);
    res.json(db);
});
});

//This should post new notes
router.post('/', function (req, res) {
    
    const newNote = req.body;
    
    fs.readFile(filePath, 'utf8', function (err, db) {
        if(err) throw err;
        db = JSON.parse(db);
        
        newNote.id = db.length > 0 ? db[db.length - 1].id + 1 : 1;

        db.push(newNote);

        fs.writeFile(filePath, JSON.stringify(db),
        err => {
            if(err) {
                res.json(err);
            }else{
                res.json(db);
            }
        });
    });
});

//This should delete the saved notes 
router.delete('/:id', (req, res) => {
fs.readFile(filePath, 'utf8', (err, db) => {
 if (err) throw err;
 db = JSON.parse(db);

 db = db.filter(post => post.id !== parseInt(req.params.id));

 fs.writeFile(filePath, JSON.stringify(db),
 err => {
     if(err) {
         res.json(err);
     }else{
         res.json(db);
     }
 });
});
});

module.exports = router;