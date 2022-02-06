

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

function createLibrary(name) {
var library = {
  name: name,
  shelves: {
fantasy: [],
fiction: [],
nonFiction: [],
  }
}
return library
}

function addBook(library, book) {
library.shelves[book.genre].push(book)
}

function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++)
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i, 1)
      return `You have now checked out ${title} from the ${library.name}`
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }

// function createLibrary(libraryName) {
//   var library = {};
//   console.log(library)
//  library.name = libraryName
//  console.log(library)
//  library.shelves = {};
//  console.log(library)
//  library.shelves.fantasy = [];
//  console.log(library)
//  library.shelves.fiction = [];
//  console.log(library)
//  library.shelves.nonFiction = [];
//  console.log(library)
//  return library
// }
