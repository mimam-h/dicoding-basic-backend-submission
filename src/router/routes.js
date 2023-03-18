import post from './post.js';
import get from './get.js';
import put from './put.js';
import delete from './delete.js';

const routes = [
  post,
  ...get,
  put,
  delete,
];

export default routes;
