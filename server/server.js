const express = require('express');
const app = express();
const syncAndSeed = require('../db/seed');
const path = require('path');

app.use('/api/books', require('./routes/books.js'));
app.use('/api/authors', require('./routes/authors.js'));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')))

app.get('/', (req, res, next) => {
  try{
    res.sendFile(path.join(__dirname, '..', 'src', 'index.html'))
  }
  catch(ex){
    next(ex)
  }
})

const start = async () => {
  try{
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`))
  }
  catch(ex){
    console.log(ex)
  }
};

start();
