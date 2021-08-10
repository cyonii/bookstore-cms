import { CREATE_BOOK, REMOVE_BOOK } from './types';

const addBook = (book) => ({
  type: CREATE_BOOK,
  payload: { book },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export { addBook, removeBook };
