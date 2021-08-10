import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';
import categories from '../data/categories.json';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const categoryOptions = categories.map((ct) => {
    if (ct === category) {
      return (
        <option value={ct} key={ct} selected>
          {ct}
        </option>
      );
    }
    return (
      <option value={ct} key={ct}>
        {ct}
      </option>
    );
  });

  const dispatch = useDispatch();
  const handleTitleChange = (e) => setTitle(e.currentTarget.value);
  const handleCategoryChange = (e) => setCategory(e.currentTarget.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && category) {
      dispatch(addBook({ title, category }));

      setTitle('');
      setCategory('');
    }
  };

  return (
    <form className="book-form">
      <h2>Add new book</h2>

      <div className="input-group">
        <label className="form-label" htmlFor="title">
          Title
          <input
            className="form-control"
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
          Category
          <select className="form-control" onChange={handleCategoryChange} id="category" required>
            <option>--select--</option>
            {categoryOptions}
          </select>
        </label>
      </div>

      <div className="input-group">
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookForm;
