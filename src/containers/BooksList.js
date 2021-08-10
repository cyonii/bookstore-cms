import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import BookItem from '../components/BookItem';
import CategoryFilter from '../components/CategoryFilter';
import defaultFilter from '../data/defaultFilter.json';

const BooksList = (props) => {
  const { books } = props;
  const listItems = books.map((book) => <BookItem key={book.id} book={book} />);

  return (
    <ul className="book-list">
      <h1>Books CMS</h1>
      <CategoryFilter />
      {listItems}
    </ul>
  );
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
