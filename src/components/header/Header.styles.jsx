import { Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
`;

export const OptionLink = styled(Link)`
  //  padding: 10px;
  color: white;

  flex-grow: 1;
`;

export const MenuContainer = styled.div`
  //background-color: red;
  display: flex;
  width: 100%;
`;
export const ToolbarContainer = styled(Toolbar)`
  background-color: #48c1a8;
`;
