module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(bookName, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(bookName);
  }
}

function unshelfBook(bookTitle, bookShelf) {
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === bookTitle) {
      bookShelf.splice(i, 1);
    }
  }
}

function listTitles(bookShelf) {
  var titleList = [];
  for (var i = 0; i < bookShelf.length; i++) {
    titleList.push(bookShelf[i].title)
  }
  return titleList.join(', ');

}

function searchShelf(bookShelf, bookTitle) {
  var titleList = [];
 for (var i = 0; i < bookShelf.length; i++) {
   titleList.push(bookShelf[i].title)
 }
   return titleList.includes(bookTitle);
 }





// function is to remove objects from the array.
//need to access name from an object and remove it by their
//name
// need to first access the array variable the objects are in.
// once inside the variable that contains the obect need to
// navigate to the key and acces its value. Using the value
// we are to remove the object from the array variable.
