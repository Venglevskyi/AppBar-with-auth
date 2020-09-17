import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#292921",
    color: "#d1c817",
    right: "auto",
  },
  menu: {
    justifyContent: "space-between",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position: "relative",
    right: "25%",
    transform: "translateX(-50%)",
  },
  buttonLogin: {
    backgroundColor: "#333329",
    borderColor: "#e6e16c",
    "&:hover": {
      backgroundColor: "#292921",
      borderColor: "#d1c817",
      boxShadow: "none",
    },
  },
  menuItem: {
    color: "#d1c817",
    textDecoration: "none",
    fontSize: "1rem",
    "&::before": {
      content: "''",
      background: "#d1c817",
      display: "block",
      height: 3,
      width: 0,
      position: "absolute",
      top: 30,
      left: "50%",
      transform: "translateX(-50%)",
      transition: "width 0.2s linear",
    },
    "&:hover::before": {
      width: "100%",
    },
  },
}));

export { useStyles };
