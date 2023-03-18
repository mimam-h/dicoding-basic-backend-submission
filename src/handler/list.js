import books from '../storage/books.js';

const listOfBook = books;

const getAllBook = (request, h) => {
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
