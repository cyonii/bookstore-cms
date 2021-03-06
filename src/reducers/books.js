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
      book.id = makeBookID();
      book.title = book.title.trim();

      if (state.some((bk) => bk.title === book.title && bk.category === book.category)) {
        return state;
      }
      return [...state, book];
    }
    case REMOVE_BOOK: {
      const { id } = action.payload;
      const filteredBooks = state.filter((book) => book.id !== id);

      return [...filteredBooks];
    }
    default:
      return state;
  }
};
