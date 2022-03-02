const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
      title: "Book3",
      author: "Name3"
    }
  ]
const getTheTitles = function(array) {
    return books.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
