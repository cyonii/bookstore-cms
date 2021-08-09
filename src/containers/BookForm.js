import utils from '../utils';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryOptions = categories.map((category) => (
    <option value={category} key={utils.makeRandomID(5)}>
      {category}
    </option>
  ));

  return (
    <form className="book-form">
      <h1>Add new book</h1>

      <div className="input-group">
        <label className="form-label" htmlFor="title">
          Title
          <input className="form-control" type="text" name="title" id="title" required />
        </label>
      </div>

      <div className="input-group">
        <label className="form-label" htmlFor="category">
          Category
          <select className="form-control" name="category" id="category" required>
            <option>--select--</option>
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
