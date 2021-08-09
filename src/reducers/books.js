import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';
import utils from '../utils';

const makeBookID = () => utils.makeRandomID(10);

const initialState = [
  { id: makeBookID(), title: 'Into the Wild', category: 'Biography' },
  { id: makeBookID(), title: 'Guns, Germs, and Steel', category: 'History' },
  { id: makeBookID(), title: 'The Forever War', category: 'Sci-Fi' },
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
