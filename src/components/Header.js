import user from '../assets/img/user.svg';
import CategoryFilter from './CategoryFilter';

function Header() {
  return (
    <div className="navbar">
      <span className="logo-text text-style-5">Bookstore CMS</span>
      <span className="nav-link active">BOOKS</span>
      <CategoryFilter className="nav-link" />
      <span className="oval">
        <img src={user} alt="User" className="mask" />
      </span>
    </div>
  );
}

export default Header;
