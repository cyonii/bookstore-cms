import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './types';

const addBook = (book) => ({
  type: CREATE_BOOK,
  payload: { book },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: { category },
});

export { addBook, removeBook, changeFilter };
