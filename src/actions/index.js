import { CREATE_BOOK, REMOVE_BOOK } from '../redux/actionTypes';

const addBook = (book) => ({
  type: CREATE_BOOK,
  payload: { book },
});

const deleteBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export { addBook, deleteBook };
