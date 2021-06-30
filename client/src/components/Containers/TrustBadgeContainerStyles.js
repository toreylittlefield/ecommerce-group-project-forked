import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFF0E5",
    height: "65vh",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 20,
    },
    textAlign: "center",
  },
  card: {
    boxShadow: "none",
    backgroundColor: "inherit",
    overflow: "hidden",
    display: "inline-flex",
    flexFlow: "column",
    alignItems: "center",
  },
  cardGrid: {
    // overflowX: "hidden"
  },
  media: {
    height: 102,
    width: 102,
    borderRadius: "50%",
  },
}));

export { useStyles };
