import { ItemNav, ListNav } from './Header.styled';

const Header = () => (
  <ListNav>
    <ItemNav to="/">Home</ItemNav>
    <ItemNav to="/movies">Movies</ItemNav>
  </ListNav>
);
export default Header;
