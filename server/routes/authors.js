const router = require('express').Router();
const Author = require('../../db/Author');
const Book = require('../../db/Book');

router.get('/', async(req, res, next) => {
  try{
    res.send(await Author.findAll({
      attributes: ['id', 'firstName', 'lastName'],
      include: [{model: Book, attributes: ['title', 'price']}]
    }));
  }
  catch(ex){
    next(ex)
  }
});

router.get('/:id', async(req, res, next)=> {
  try{
    res.send(await Author.findByPk(req.params.id, {
      attributes: ['id', 'firstName', 'lastName'],
      include: [{model: Book, attributes: ['title', 'price', 'genre', 'isUsed']}]
    }))
  }
  catch(ex){
    next(ex)
  }
});

module.exports = router;