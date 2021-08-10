import BookForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <>
      <div id="book-list-container">
        <BooksList />
      </div>
      <div id="book-form-container">
        <BookForm />
      </div>
    </>
  );
}

export default App;
