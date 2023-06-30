import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const ListNav = styled.ul`
  display: flex;
  gap: 20px;
`;

const ItemNav = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export { ListNav, ItemNav };
