import { useDispatch, useSelector } from 'react-redux';
import categories from '../data/categories.json';
import utils from '../utils';
import defaultFilter from '../data/defaultFilter.json';
import { changeFilter } from '../actions';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { makeRandomID } = utils;
  const currentFilter = useSelector((state) => state.filter);

  const filterOptions = [defaultFilter, ...categories].map((category) => (
    <option key={makeRandomID(50)} selected={category === currentFilter}>
      {category}
    </option>
  ));
  const handleChange = (e) => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label htmlFor="category-filter" className="form-label">
      <b>FILTER:</b>
      <select className="form-control" id="category-filter" onChange={handleChange}>
        {filterOptions}
      </select>
    </label>
  );
};

export default CategoryFilter;
