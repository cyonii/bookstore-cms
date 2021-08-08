import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = [
  { id: '45678', title: 'The Pragmatic Programmer', category: 'Computer' },
  { id: '36246', title: 'Rich Dad, Poor Dad', category: 'Lifestyle' },
  { id: '93713', title: '12 Key Habits To Wealth', category: 'Life' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, ...action.payload };
    case REMOVE_BOOK:
      return { ...state };
    default:
      return state;
  }
};
