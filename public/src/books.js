function findAuthorById(authors, id) {
  // iterate thru authors; comparing the id to the user entry
return authors.find(name => name.id === id);
}

function findBookById(books, id) {
  // iterate thru books; comparing the id to the user entry
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returned = [];
  let overallStatus = [];
  //iterating thru books;
 books.forEach((book) => { 
   // checking returned status of the book
    const bookReturn = book.borrows[0].returned;
   // depening on result, pushed into two seperate arrays;
    if (bookReturn) {
      returned.push(book);
    } else {
      checkedOut.push(book);
    }
  });
  // pushing both arrays in final result;
overallStatus.push(checkedOut);
overallStatus.push(returned);
 return overallStatus;
}

function getBorrowersForBook(book, accounts) {
   let result = [];
   let borrowed =  book.borrows;
  // iterating thru the book.borrows array;
   borrowed.forEach (borrow =>{
     //comparing account id to the borrows id's
     let account = accounts.find(acc => acc.id === borrow.id);
     let test = account;
     // including returned element in result
     test['returned'] = borrow.returned;
     result.push(test);
   })
  // limiting results to 10 max;
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
