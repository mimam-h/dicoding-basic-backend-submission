import handler from '../handler/handler.js';

const { editBookById } = handler;

const put = {
  method: 'PUT',
  path: '/books/{bookId}',
  handler: editBookById,
};

export default put;
