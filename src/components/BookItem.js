import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { book } = props;
  const handleRemoveBook = () => props.removeBookHandler(props.book.id);

  return (
    <li className="book-item">
      <div className="book-info-wrapper">
        <p className="book-category">{book.category}</p>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">Book Author</p>

        <div className="book-links ts-6">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>
            Remove Book
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress-info-wrapper">
        <div className="left">
          <div className="progress-circle"> </div>
          <p>
            <span className="progress-percentage">64%</span>
            <br />
            <span className="progress-text">Completed</span>
          </p>
        </div>
        <div className="divider"> </div>
        <div className="right">
          <span>CURRENT CHAPTER</span>
          <span>Chapter 3: A Lesson Learned</span>

          <button className="progress-update-btn" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};

export default BookItem;
