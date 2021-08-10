import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
            <option value="">--select--</option>
            {categoryOptions}
          </select>
        </label>
      </div>

      <div className="input-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookForm;
