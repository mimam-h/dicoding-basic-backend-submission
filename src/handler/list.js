import books from '../storage/books.js';

const getAllBook = (request, h) => {
  let listOfBook = books;
  const { name, reading, finished } = request.query;
  if (name !== undefined && reading !== undefined && finished !== undefined) {
    listOfBook.filter(
      (b) => b.name.toLowerCase().includes(name.toLowerCase())
        && b.reading === Boolean(reading)
        && b.finished === Boolean(finished),
    );
  } else if (name !== undefined) {
    listOfBook = listOfBook.filter((b) => b.name.toLowerCase().includes(name.toLowerCase()));
  } else if (reading !== undefined) {
    listOfBook = listOfBook.filter((b) => b.reading === (reading == 1));
  } else if (finished !== undefined) {
    listOfBook = listOfBook.filter((b) => b.finished === (finished == 1));
  }
  const response = h.response({
    status: 'success',
    data: {
      books: listOfBook.map((book) => (
        {
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        }
      )),
    },
  });
  response.code(200);
  return response;
};

export default getAllBook;
