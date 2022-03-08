const { db, Book, Author } = require('./index');

const syncAndSeed = async() => {
  try{
    await db.sync({force: true});
    
    const [ rowling, tolkien, martin, herbert, hunter, baldacci, james, hodges, swade, christie ] = await Promise.all([
      Author.create({lastName: 'Rowling', firstName: 'J.K.'}),
      Author.create({lastName: 'Tolkien', firstName: 'J.R.R.'}),
      Author.create({lastName: 'Martin', firstName: 'George R. R.'}),
      Author.create({lastName: 'Herbert', firstName: 'Frank'}),
      Author.create({lastName: 'Hunter', firstName: 'Stephen'}),
      Author.create({lastName: 'Baldacci', firstName: 'David'}),
      Author.create({lastName: 'James', firstName: 'E.L.'}),
      Author.create({lastName: 'Hodges', firstName: 'Andrew'}),
      Author.create({lastName: 'Swade', firstName: 'Doron'}),
      Author.create({lastName: 'Christie', firstName: 'Agatha'}),
    ])
  
    await Promise.all([
      Book.create({title: 'Harry Potter and the Philosopher\'s Stone', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'Harry Potter and the Chamber of Secrets', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'Harry Potter and the Prisoner of Azkaban', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'Harry Potter and the Goblet of Fire', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'Harry Potter and the Order of the Phoenix', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'Harry Potter and the Half-Blood Prince', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'Harry Potter and the Deathly Hallows', price: 12.99, genre: 'Young Adult', authorId: rowling.id}),
      Book.create({title: 'The Hobbit', price: 16.99, genre: 'Fantasy', authorId: tolkien.id}),
      Book.create({title: 'The Fellowship of the Ring', price: 16.99, genre: 'Fantasy', authorId: tolkien.id}),
      Book.create({title: 'The Two Towers', price: 16.99, genre: 'Fantasy', authorId: tolkien.id}),
      Book.create({title: 'The Return of the King', price: 16.99, genre: 'Fantasy', authorId: tolkien.id}),
      Book.create({title: 'The Silmarillion', price: 16.99, genre: 'Fantasy', authorId: tolkien.id}),
      Book.create({title: 'Unfinished Tales', price: 14.99, genre: 'Fantasy', authorId: tolkien.id}),
      Book.create({title: 'A Game of Thrones', price: 18.99, genre: 'Fantasy', authorId: martin.id}),
      Book.create({title: 'A Clash of Kings', price: 18.99, genre: 'Fantasy', authorId: martin.id}),
      Book.create({title: 'A Storm of Swords', price: 18.99, genre: 'Fantasy', authorId: martin.id}),
      Book.create({title: 'A Feast for Crows', price: 18.99, genre: 'Fantasy', authorId: martin.id}),
      Book.create({title: 'A Dance with Dragons', price: 21.99, genre: 'Fantasy', authorId: martin.id}),
      Book.create({title: 'Dune', price: 13.99, genre: 'Sci-Fi', authorId: herbert.id}),
      Book.create({title: 'Point of Impact', price: 8.99, genre: 'Thriller', authorId: hunter.id}),
      Book.create({title: 'Black Light', price: 8.99, genre: 'Thriller', authorId: hunter.id}),
      Book.create({title: 'Time to Hunt', price: 8.99, genre: 'Thriller', authorId: hunter.id}),
      Book.create({title: 'Zero Day', price: 9.99, genre: 'Thriller', authorId: baldacci.id}),
      Book.create({title: 'The Forgotten', price: 9.99, genre: 'Thriller', authorId: baldacci.id}),
      Book.create({title: 'The Escape', price: 9.99, genre: 'Thriller', authorId: baldacci.id}),
      Book.create({title: 'No Man\'s Land', price: 9.99, genre: 'Thriller', authorId: baldacci.id}),
      Book.create({title: 'Fifty Shades of Grey', price: 1.99, genre: 'Romance', isUsed: true, authorId: james.id}),
      Book.create({title: 'Fifty Shades Darker', price: 1.99, genre: 'Romance', isUsed: true, authorId: james.id}),
      Book.create({title: 'Fifty Shades Freed', price: 0.99, genre: 'Romance', isUsed: true, authorId: james.id}),
      Book.create({title: 'Alan Turing: The Enigma', price: 7.99, genre: 'Biography', authorId: hodges.id}),
      Book.create({title: 'The Difference Engine: Charles Babbage and the Quest to Build the First Computer', price: 4.99, genre: 'Biography', isUsed: true, authorId: swade.id}),
      Book.create({title: 'Murder on the Orient Express', price: 5.99, genre: 'Mystery', authorId: christie.id}),
      Book.create({title: 'And Then There Were None', price: 5.99, genre: 'Mystery', authorId: christie.id}),
      Book.create({title: 'Crooked House', price: 5.99, genre: 'Mystery', authorId: christie.id}),
      Book.create({title: 'The Mousetrap', price: 5.99, genre: 'Mystery', authorId: christie.id}),
      Book.create({title: 'The A.B.C. Murders', price: 5.99, genre: 'Mystery', authorId: christie.id}),
      Book.create({title: 'Crooked House', price: 5.99, genre: 'Mystery', authorId: christie.id}),
      Book.create({title: 'A Murder is Announced', price: 5.99, genre: 'Mystery', authorId: christie.id}),
    ])
  }  
  catch(ex){
    console.log(ex)
  }
}

module.exports = syncAndSeed;