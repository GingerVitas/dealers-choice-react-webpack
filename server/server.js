const express = require('express');
const app = express();
const syncAndSeed = require('../db/seed')

app.use('/api/books', require('./routes/books.js'))


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
