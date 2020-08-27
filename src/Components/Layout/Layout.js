import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

import Header from "../Header/Header";

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <Container fixed={true}>
      <Header />
      {children}
    </Container>
  </>
);

export default Layout;
