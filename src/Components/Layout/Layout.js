import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/Header";

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container fixed={true} className={classes.root}>
        <Header />
        {children}
      </Container>
    </>
  );
};

export default Layout;
