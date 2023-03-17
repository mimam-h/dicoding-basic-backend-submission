import { nanoid } from 'nanoid';

import books from '../storage/books.js';

import validation from './validation.js';

// Add New Note
const addNote = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  try {
    validation(name, year, author, summary, publisher, pageCount, readPage, reading);
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });
    response.code(400);
    return response;
  }
  let finished = false;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  if (readPage === pageCount) {
    finished = true;
  }
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  books.push(newBook);
  const isSuccess = books.filter((book) => book.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
};
export default addNote;
