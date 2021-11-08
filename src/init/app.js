import { findRoute } from '../utils/routing.js';

//Router
const router = () => {
  const currentPath = window.location.search.slice(1);
  const routeObject = findRoute(currentPath);

  routeObject.route(routeObject.number);
};

// Event listeners
window.addEventListener('load', router);
