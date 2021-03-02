import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    margin: 10,
    boxSizing: "border-box",
  },
  overlay2: {
    // position: "absolute",
    // bottom: "20px",
    // right: "20px",
    color: "white",
    cursor: "pointer",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "10px",
  },
  title: {
    padding: "0 8px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    marginLeft: 20,
  },

  header: {
    margin: 10,
    padding: 10,
  },
  header__title: {
    color: "blue",
    marginBottom: 5,
  },
}));
