import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = [
  { id: '45678', title: 'The Pragmatic Programmer', category: 'Computer' },
  { id: '36246', title: 'Rich Dad, Poor Dad', category: 'Lifestyle' },
  { id: '93713', title: '12 Key Habits To Wealth', category: 'Life' },
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
