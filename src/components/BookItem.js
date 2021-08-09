import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { book } = props;

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
