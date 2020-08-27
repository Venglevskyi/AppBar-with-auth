import React from "react";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Menu, MenuItem, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./styles";
import routes from "../../routes";

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.menu}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleMenuClick(routes.POSTS)}>
              News
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick()}>Photos</MenuItem>
          </Menu>
        </div>
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => handleMenuClick(routes.SIGN_IN)}
          className={classes.buttonLogin}
        >
          Log in
        </Button>
      </Toolbar>
    </AppBar>
    // <AppBar position="fixed" className={classes.header}>
    //   <Toolbar className={classes.menu}>
    //     <IconButton
    //       edge="start"
    //       className={classes.menuButton}
    //       color="inherit"
    //       aria-label="menu"
    //     >
    //       <MenuIcon />
    //     </IconButton>
    //     <NavLink to={routes.SIGN_IN}>
    //       <span className={signIn__word}>L</span>
    //       <span className={signIn__word}>o</span>
    //       <span className={signIn__word}>g</span>
    //       <span className={signIn__word}>i</span>
    //       <span className={signIn__word}>n</span>
    //     </NavLink>
    //   </Toolbar>
    // </AppBar>
  );
};

export default withRouter(Header);
