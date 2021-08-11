import { connect, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import BookItem from '../components/BookItem';
import { removeBook } from '../actions';
import defaultFilter from '../data/defaultFilter.json';

const BooksList = (props) => {
  const { books } = props;
  const dispatch = useDispatch();

  const bookRemoveHandler = (id) => dispatch(removeBook(id));
  const listItems = books.map((book) => (
    <BookItem key={book.id} book={book} removeBookHandler={bookRemoveHandler} />
  ));

  return <ul className="book-list">{listItems}</ul>;
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => {
  if (state.filter === defaultFilter) {
    return { books: state.books };
  }
  return { books: state.books.filter((book) => book.category === state.filter) };
};

export default connect(mapStateToProps)(BooksList);
