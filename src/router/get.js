import handler from '../handler/handler.js';

const { getAllBook, getDetailById } = handler;

const get = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailById,
  },
];

export default get;
