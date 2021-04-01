// const express = require('express');
// const path = require('path');
// const util = require('util');
// const fs = require('fs');
// const {v1: uuidv1 } = require('uuid');

// // reading and writing app
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);
// uuidv1();
// console.log(uuidv1());

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.static(path.join(__dirname + '/public')));

// //HTML Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'));
// });

// //Api get routes
// app.get('/api/notes', async function(req, res) {
//     const data = await getData();
//     res.status(200).json(data);
// })

// //Api post 
// app.post('/api/notes', async function(req, res) {
//     let note = req.body;
//     const newData = await getData();
//     newData.push({
//         ...note,
//         id: newData.length
//     });
//     await writeData(newData);
//     return res.status(202);
//  });

//  app.delete('/api/notes:id', async function(req, res) {
//      let noteId = Number(req.body.id);
//      const newData = await getData()
//      const note = newData.reduce((acc, curr) =>{
//          if(curr.id !== noteId) acc.push(curr); 
//              return acc;
//      }, []);
//      await writeData(note);
//      return res.sendStatus(200);
//  });

// app.delete('/api/notes/:id', (req, res) => {

// })

//  //This function read the notes from
//  getData = async () => {
// try {
//     const data = await readFile(path.join(__dirname, './db/db.json'), 'utf8');
//     return JSON.parse(data);
// } catch(err) {
//     console.log(err);
//     return err;
// }
//  }

//  //This function write the data
//  writeData = async (data) => {
//      try {
//     const update = await writeFile(path.join(__dirname, './db/db.json'), 
//     JSON.stringify(data)
//     );
//     return update;
//      } catch(err) {
//          console.log(err);
//          return err;
//      }
//  }

//  //Here start the server
//  app.listen(PORT, () => {
//      console.log(`Server listening on: localhost:${PORT}`)
//  })
console.log("======================================================================");
// //Dependecies
// const express = require('express');
// const path = require('path');
// const util = require('util');
// const {v1: v1uuid} = require('uuid');
// const fs = require('fs');

// //Reading and Writing app
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// const app = require();
// const PORT = process.env.PORT || 3500;

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.static(path.join(__dirname + '/public')));



// //HTML Routes
// const myLogger = function (req, res, next) {
//     console.log("Logged");
//     next();
// };

// console.log(myLogger);


// app.get('/', (req, res) => {
//     res.senFile(path.join(__dirname , '/public/index.html'));
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// })

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'));
// });

//Api routes
//  getNote = () => {
  
//     const readNote = readFile(path.join(__dirname, 'utf8', '/db/db.json'));

//     app.get('/api/notes' , (req, res) => {
        
//     })
// }

app.listen(PORT, (req, res) => {
    console.log('listening on port: ' + PORT);
})