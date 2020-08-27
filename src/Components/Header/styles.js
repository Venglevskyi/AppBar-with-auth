import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#292921",
    color: "#d1c817",
    maxWidth: 1200,
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
    flexGrow: 1,
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
}));

export { useStyles };
