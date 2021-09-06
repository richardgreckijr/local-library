function getTotalBooksCount(books) {
  // iterating thru books, incrementing at every result;
  let total = 0;
  for (let book in books){
    total ++;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
   // iterating thru accounts, incrementing at every result;
    let total = 0;
  for (let account in accounts){
    total ++;
  }
  return total;
}


function getBooksBorrowedCount(books) {
  let total = 0; 
  //iterating thru books; 
books.forEach(book => {
  // condtional; for every book that is 'returned false', increment;
  if (!book.borrows[0].returned) total++;
});
  return total;
}

function getMostCommonGenres(books) {
  // map method to narrow search to books genre;
  const bookGenre = books.map ((book) => book.genre);
  const total = [];
  bookGenre.map((genre) => {
    // variable to help compare throughout total array; so no duplicate genres are pushed;
    const genreLocation = total.findIndex((element) => element.name === genre);
    // if genre already exist; add to count
    if (genreLocation >= 0){
      total[genreLocation].count = total[genreLocation].count + 1;
    } else {
      // else push new genre, set default count to 1;
      total.push({name: genre, count: 1});
    }
  });
  // sort thru counts; adjusting order in array
  total.sort((a,b) => b.count - a.count);
if (total.length > 5){
  // limit results to 5;
  return total.slice(0, 5);
}
  return total;
  
}

function getMostPopularBooks(books) {
  // return object with title and number of borrows book has
    const bookName = books.map (book => ({name:book.title, count:book.borrows.length}));
  // sort thru bookName results; adjusting order;
    bookName.sort((a,b) => b.count - a.count);
  // limit results to 5;
  return bookName.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // iterating thru authors
const popularAuthor = authors.map (a => ({
  ...a,
  // filtering thru books matching to author using spread operator
  totalBooks: books.filter( b => b.authorId === a.id).length,
  // filtering thru books only returning those borrowed; sorting to organize popularity;
  borrowCount: books.filter(b => b.authorId === a.id).reduce((acc, lot)=> acc + lot.borrows.length, 0)
})).sort((b, a) => a.borrowCount - b.borrowCount);
  // limit results to 5;
  popularAuthor.length = 5;
  // map thru return statement(array); returning authors and borrowed book count;
  return popularAuthor.map(ok => {
    return {name: ok.name.first + " " + ok.name.last, count: ok.borrowCount }
  })
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
