import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';
import utils from '../utils';

const makeBookID = () => utils.makeRandomID(10);

const initialState = [
  { id: makeBookID(), title: 'The Pragmatic Programmer', category: 'Computer' },
  { id: makeBookID(), title: 'Rich Dad, Poor Dad', category: 'Lifestyle' },
  { id: makeBookID(), title: '12 Key Habits To Wealth', category: 'Life' },
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
