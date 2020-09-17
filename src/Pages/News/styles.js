import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: 250,
    overflow: "auto",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
  },
  card: {
    maxWidth: 275,
    margin: "0px auto 12px",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 12,
  },
});

export { useStyles };
