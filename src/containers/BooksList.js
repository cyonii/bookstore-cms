import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import BookItem from '../components/BookItem';

const BooksList = (props) => {
  const { books } = props;
  const tableRows = books.map((book) => <BookItem key={book.id} book={book} />);

  return (
    <table className="book-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
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
