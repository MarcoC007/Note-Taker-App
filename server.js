const express = require('express');
const path = require('path');
const util = require('util');
const fs = require('fs');
const db = 'db/db.json';
const {v1: uuidv1 } = require('uuid');
// const morgan = require('morgan');

// reading and writing app
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
uuidv1();
console.log(uuidv1());

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(morgan('dev'));
app.use(express.static('public'));


 //This function read the notes from
 getData = async () =>  {
    const notes = await readFile('db/db.json', 'utf8');
      let pNotes;
      try {
          pNotes = [].concat(JSON.parse(notes));
      } catch (err) {
          pNotes = [];
      }
      return pNotes;
  }
 
 
  //This function write the data
  writeData = async (data) => {
      try {
     const update = await writeFile(path.join(__dirname, './db/db.json'), 
     JSON.stringify(data)
     );
     return update;
      } catch(err) {
          console.log(err);
          return err;
      }
  }
 

//HTML Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//Api get routes
app.get('/api/notes', async function(req, res) {
    
    const data = await getData();
    res.status(200).json(data);
})

//Api post 
app.post('/api/notes', async function(req, res) {
    console.log('saving')
    let note = req.body;
    req.body.id = uuidv1();
    const newData = await getData();
    newData.push({
        ...note,
        id: newData.length
    });
    await writeData(newData);
    return res.status(201);
 });

 app.delete('/api/notes/:id', function(req, res) {
    // removeNote = () => {
    // let noteId = req.body.id;
    // return getData()
    // .then((notes) => notes.filter((note) => note.id !== noteId))
    // .then((deletedNotes) => writeData(deletedNotes));
    // }
    // removeNote(req.params.id)
    // .then(() => res.json({ ok: true}))
    // .catch((err) => res.sendStatus(200).json(err));
    let Note = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
 

    let idDel = req.params.id;
    
    Note = Note.filter(currentNote => {
        return currentNote.id !== idDel;
    });

    writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(Note), (err) => {
        if (err) throw err;
        res.json(Note);
    }).then(() => res.json({ ok: true}))
    .catch((err) => res.sendStatus(200).json(err));
 });


 //Here start the server
 app.listen(PORT, () => {
     console.log(`Server listening on: localhost:${PORT}`)
 })
