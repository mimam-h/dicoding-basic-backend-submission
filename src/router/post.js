import addNote from '../handler/add.js';

const post = {
  method: 'POST',
  path: '/books',
  handler: addNote,
};

export default post;
