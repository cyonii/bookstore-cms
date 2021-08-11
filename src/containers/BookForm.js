import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';
import categories from '../data/categories.json';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const categoryOptions = categories.map((ct) => (
    <option value={ct} key={ct}>
      {ct}
    </option>
  ));

  const dispatch = useDispatch();
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    e.stopPropagation();

    if (title && category) {
      dispatch(addBook({ title, category }));

      setTitle('');
      setCategory('');
    }
    return false;
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add new book</h2>

      <div className="form-row">
        <div className="input-group">
          <label className="form-label" htmlFor="title">
            <input
              className="form-control title-input"
              type="text"
              onChange={handleTitleChange}
              id="title"
              value={title}
              placeholder="Enter book title"
              required
            />
          </label>
        </div>

        <div className="input-group">
          <label className="form-label" htmlFor="category">
            <select
              className="form-control category-select"
              onChange={handleCategoryChange}
              id="category"
              required
            >
              <option value="">Category</option>
              {categoryOptions}
            </select>
          </label>
        </div>

        <div className="input-group">
          <button type="submit" className="btn btn-primary">
            ADD BOOK
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
