import post from './post.js';
import get from './get.js';
import put from './put.js';
import remove from './delete.js';

const routes = [
  post,
  ...get,
  put,
  remove,
];

export default routes;
