import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => dispatch(removeBook(book.id));

  return (
    <li className="book-item">
      <p className="book-category">{book.category}</p>
      <h3 className="book-title">{book.title}</h3>
      <p className="book-id">
        <small>
          ID:&nbsp;&nbsp;
          <span>{book.id}</span>
        </small>
      </p>
      <br />
      <button type="button" className="book-remove-btn" onClick={handleRemoveBook}>
        Remove Book
      </button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
