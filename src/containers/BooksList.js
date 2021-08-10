import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import BookItem from '../components/BookItem';

const BooksList = (props) => {
  const { books } = props;
  const tableRows = books.map((book) => <BookItem key={book.id} book={book} />);

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
