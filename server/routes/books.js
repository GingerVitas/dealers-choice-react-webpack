const router = require('express').Router();
const Book = require('../../db/Book')
const Author = require('../../db/Author')

router.get('/', async(req, res, next) => {
  try{
    res.send(await Book.findAll({
      include: [{
        model: Author, 
        attributes: ['firstName', 'lastName'],
        order: ['id']
      }]
    })
    )}
  catch(ex){
    next(ex)
  }
})

router.get('/:id', async(req, res, next)=>{
  try{
    res.send(await Book.findByPk(req.params.id, {
      include: [{model: Author, attributes: ['firstName', 'lastName']}]
    }))
  }
  catch(ex){
    next(ex)
  }
})

router.post('/new', async(req, res, next) => {
  try{
    res.status(201).send(await Book.generateRandom())
  }
  catch(ex){
    next(ex)
  }
})

module.exports = router