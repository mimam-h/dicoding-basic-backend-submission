import handler from '../handler/handler.js';

const { addBook } = handler;

const post = {
  method: 'POST',
  path: '/books',
  handler: addBook,
};

export default post;
