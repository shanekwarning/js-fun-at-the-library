 function createTitle(bookName) {
return `The ${bookName}`;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

function buildMainCharacter(name, age, pronoun) {
  return {
    name: name,
    age: age,
    pronouns: pronoun,
  }
}

function saveReview(addReview, reviews) {
if (reviews.includes(addReview) === false)
return reviews.push(addReview);
}

function calculatePageCount(title) {
return bookPageCount = title.length * 20 ;

}

function writeBook(bookTitle, bookCharacter, bookGenre) {
var bookInfo = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: bookTitle.length * 20,
  genre: bookGenre,
}
return bookInfo
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * .75

    return ghoulBook;
}
