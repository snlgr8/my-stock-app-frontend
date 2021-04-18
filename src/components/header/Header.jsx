import { AppBar, Icon, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { ToolbarContainer, HeaderTitle } from "./Header.styles";

function Header(props) {
  return (
    <AppBar position="static">
      <ToolbarContainer>
        <HeaderTitle variant="h5">Welcome to the application</HeaderTitle>
      </ToolbarContainer>
    </AppBar>
  );
}

export default Header;
