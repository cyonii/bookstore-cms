import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = [
  { id: 'B34KS7K1T1T', title: 'Into the Wild', category: 'Biography' },
  { id: 'P9W1C6GQK03', title: 'Guns, Germs, and Steel', category: 'History' },
  { id: 'RYN01K1K221', title: 'The Forever War', category: 'Sci-Fi' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const { book } = action.payload;

      return { ...state, books: state.books.concat(book) };
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      const filteredBooks = state.books.filter((book) => book.id !== id);

      return { ...state, books: filteredBooks };
    }
    default:
      return state;
  }
};
