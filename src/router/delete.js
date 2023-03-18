import handler from '../handler/handler.js';

const { deleteBookById } = handler;

const remove = {
  method: 'DELETE',
  path: '/notes/{bookId}',
  handler: deleteBookById,
};

export default remove;
