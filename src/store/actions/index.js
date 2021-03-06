import {
  FETCH_BOOKS,
  FETCH_DETAILS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "../types";
import axios from "axios";

export const fetchBooks = () => {
  return async dispatch => {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=Spongebob"
    );
    dispatch({ type: FETCH_BOOKS, payload: response.data.items });
  };
};

export const fetchDetails = id => {
  return async dispatch => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    dispatch({ type: FETCH_DETAILS, payload: response.data });
  };
};

export const addToFavorites = book => {
  return {
    type: ADD_TO_FAVORITES,
    payload: book
  };
};

export const removeFromFavorites = id => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id
  };
};
