const authMiddleware = (store) => (next) => (action) => {
  console.log(store);
  console.log(next);
  console.log(action);
};
export default authMiddleware;
