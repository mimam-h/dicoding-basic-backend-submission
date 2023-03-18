import handler from '../handler/handler.js';

const { getAllBook } = handler;

const get = {
  method: 'GET',
  path: '/books',
  handler: getAllBook,
};

export default get;
