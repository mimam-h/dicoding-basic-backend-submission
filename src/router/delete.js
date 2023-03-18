import handler from '../handler/handler.js';

const { deleteBookById } = handler;

const remove = {
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBookById,
};

export default remove;
