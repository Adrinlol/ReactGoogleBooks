import {
  FETCH_BOOKS,
  FETCH_DETAILS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "../types";

const INITIAL_STATE = {
  allBooks: [],
  details: "",
  favoriteBooks: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, allBooks: { ...action.payload } };
    case FETCH_DETAILS:
      return { ...state, details: action.payload };
    case ADD_TO_FAVORITES:
      const newState = {
        favoriteBooks: Object.assign(
          {},
          { [action.payload.id]: action.payload },
          state.favoriteBooks
        )
      };
      return Object.assign({}, state, newState);
    case REMOVE_FROM_FAVORITES:
      const payload = action.payload;
      const { [payload]: value, ...updatedState } = state.favoriteBooks;
      return { ...state, favoriteBooks: { ...updatedState } };
    default:
      return state;
  }
};
