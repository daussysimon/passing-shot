export const initialState = {
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  return state;
};

export default reducer;
