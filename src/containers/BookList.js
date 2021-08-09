import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import BookItem from '../components/BookItem';

const BookList = (props) => {
  const { books } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
