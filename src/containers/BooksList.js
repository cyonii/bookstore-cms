import { connect, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import BookItem from '../components/BookItem';
import { removeBook } from '../actions';

const BooksList = (props) => {
  const { books } = props;
  const dispatch = useDispatch();

  const bookRemoveHandler = (id) => dispatch(removeBook(id));

  const tableRows = books.map((book) => (
    <BookItem key={book.id} book={book} removeBookHandler={bookRemoveHandler} />
  ));

  return (
    <ul className="book-list">
      <h1>Books CMS</h1>
      {tableRows}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
