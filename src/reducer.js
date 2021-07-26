export const initialState = {
  meals: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEAL":
      return {
        ...state,
        meals: [...state.meals, action.item],
      };
    default:
      return state;
  }
};

export default reducer;