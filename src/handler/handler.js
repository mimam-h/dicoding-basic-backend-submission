import addBook from './add.js';
import getAllBook from './list.js';
import getDetailById from './detail.js';
import editBookById from './update.js';
import deleteBookById from './delete.js';

const handler = {
  addBook,
  getAllBook,
  getDetailById,
  editBookById,
  deleteBookById,
};

export default handler;
