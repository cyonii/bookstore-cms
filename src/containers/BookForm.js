import utils from '../utils';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryOptions = categories.map((category) => (
    <option value={category} key={utils.makeRandomID(5)}>
      {category}
    </option>
  ));

  return (
    <form>
      <h1>Book Form</h1>

      <div className="input-group">
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" required />
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="category">
          Category
          <select name="category" id="category" required>
            <option>--select--</option>
            {categoryOptions}
          </select>
        </label>
      </div>
    </form>
  );
};

export default BookForm;