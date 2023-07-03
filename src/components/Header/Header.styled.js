import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderCSS = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: black;
`;

const ListNav = styled.ul`
  display: flex;
  gap: 20px;
`;

const ItemNav = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: red;
  }
`;

export { HeaderCSS, ListNav, ItemNav };
