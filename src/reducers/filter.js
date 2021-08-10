import { CHANGE_FILTER } from '../actions/types';
import defaultFilter from '../data/defaultFilter.json';

export default (state = defaultFilter, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return action.payload.category;
    }
    default:
      return state;
  }
};
