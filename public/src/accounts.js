function findAccountById(accounts, id) {
  // iterate thru accounts, locating user.id and comparing to id argument
return accounts.find(user => user.id === id);
  }

function sortAccountsByLastName(accounts) {
  // helper function to assist; comparing last names
  function sorted(a, b) { 
    if (a.name.last > b.name.last ) {
      return 1 ;
    }
    else if  (b.name.last > a.name.last) {
      return -1
    } else
    return 0;
  }
  //return helper function with sort method to organize result
  return accounts.sort(sorted);
}

function getTotalNumberOfBorrows(account, books) {
  // destructure account id
const { id: accId } = account;
  return books.reduce((acc, book) => {
    return (
    acc + book.borrows
      // filter thru to check if the IDs are same
      .filter(borrow => borrow.id === accId)
      // reduce and returning total sum of ID is shown
    .reduce((accBorrows, borrow) => accBorrows + 1, 0)
    );
  }, 0);
  }

function getBooksPossessedByAccount(account, books, authors) {
  let totalBooks = [];
  // iterate thru all of books
  books.forEach(book => {
    // condtional to make sure book id matches the account id and the book has not been returned
    if (book.borrows.find(data => data.id === account.id && !data.returned)) {
      totalBooks.push(book);
    }
  })
  // iterate thru authors checking the authors id and the authors id in the book element
  totalBooks.forEach(book => {
    // nesting the author object inside the result
    let authorsID = authors.find(name => name.id === book.authorId);
    book['author'] = authorsID;
  })
  return totalBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
