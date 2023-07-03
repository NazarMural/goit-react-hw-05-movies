import { HeaderCSS, ItemNav, ListNav } from './Header.styled';

const Header = () => (
  <HeaderCSS>
    <ListNav>
      <ItemNav to="/">Home</ItemNav>
      <ItemNav to="/movies">Movies</ItemNav>
    </ListNav>
  </HeaderCSS>
);
export default Header;
